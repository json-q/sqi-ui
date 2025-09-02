import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import responsiveObserve, { responsiveArray, responsiveMap } from '../responsiveObserve';

type Fn = (...args: any[]) => any;

describe('responsiveObserve', () => {
  // 保存原始的matchMedia
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    responsiveObserve.handlers = {};

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  describe('responsiveArray', () => {
    it('should be defined', () => {
      expect(responsiveArray).toEqual(['xxl', 'xl', 'lg', 'md', 'sm', 'xs']);
    });
  });

  describe('responsiveMap', () => {
    it('should be defined with correct breakpoints', () => {
      expect(responsiveMap).toEqual({
        xs: '(max-width: 575px)',
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
        xxl: '(min-width: 1600px)',
      });
    });
  });

  describe('subscribe and unsubscribe', () => {
    it('should subscribe and unsubscribe correctly', () => {
      const callback = vi.fn();

      // 订阅
      const token = responsiveObserve.subscribe(callback);
      expect(typeof token).toBe('number');
      expect(callback).toHaveBeenCalled();

      // 取消订阅
      responsiveObserve.unsubscribe(token);
      // 验证回调函数被调用次数
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should call all subscribers when dispatch is called', () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      const token1 = responsiveObserve.subscribe(callback1);
      const token2 = responsiveObserve.subscribe(callback2);

      // 模拟屏幕变化
      const screens = { xs: true, sm: false };
      responsiveObserve.dispatch(screens);

      expect(callback1).toHaveBeenCalledWith(screens);
      expect(callback2).toHaveBeenCalledWith(screens);

      // 清理
      responsiveObserve.unsubscribe(token1);
      responsiveObserve.unsubscribe(token2);
    });
  });

  describe('register and unregister', () => {
    it('should register media queries on first subscription', () => {
      const mockMql = {
        matches: false,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      };

      // 模拟matchMedia返回自定义对象
      window.matchMedia = vi.fn().mockReturnValue(mockMql);

      const callback = vi.fn();
      responsiveObserve.subscribe(callback);

      // 验证为每个断点都注册了媒体查询监听器
      expect(window.matchMedia).toHaveBeenCalledTimes(Object.keys(responsiveMap).length);
      expect(mockMql.addListener).toHaveBeenCalledTimes(Object.keys(responsiveMap).length);
    });

    it('should unregister media queries when no subscribers left', () => {
      const mockMqls: any[] = [];

      window.matchMedia = vi.fn().mockImplementation((query) => {
        const mockMql = {
          matches: false,
          media: query,
          addListener: vi.fn(),
          removeListener: vi.fn(),
        };
        mockMqls.push(mockMql);
        return mockMql;
      });

      const callback = vi.fn();
      const token = responsiveObserve.subscribe(callback);

      // 确保监听器已添加
      mockMqls.forEach((mql) => {
        expect(mql.addListener).toHaveBeenCalled();
      });

      // 取消订阅，应该触发unregister
      responsiveObserve.unsubscribe(token);

      // 验证监听器已被移除
      mockMqls.forEach((mql) => {
        expect(mql.removeListener).toHaveBeenCalled();
      });
    });
  });

  describe('media query handling', () => {
    it('should update screens when media query matches change', () => {
      const listeners: Fn[] = [];
      const mqlMocks: any[] = [];

      // 创建更真实的matchMedia模拟
      window.matchMedia = vi.fn().mockImplementation((query) => {
        const mqlMock = {
          matches: false,
          media: query,
          addListener: vi.fn((listener: Fn) => {
            listeners.push(listener);
          }),
          removeListener: vi.fn(),
        };
        mqlMocks.push(mqlMock);
        return mqlMock;
      });

      const callback = vi.fn();
      responsiveObserve.subscribe(callback);

      // 模拟媒体查询变化
      if (listeners[0]) {
        listeners[0]({ matches: true });
      }

      // 验证回调被调用
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('dispatch', () => {
    it('should update screens and notify subscribers', () => {
      const callback = vi.fn();
      responsiveObserve.subscribe(callback);

      const screens = { xs: true, sm: false, md: false, lg: false, xl: false, xxl: false };
      const result = responsiveObserve.dispatch(screens);

      expect(result).toBe(true); // 因为有订阅者
      expect(callback).toHaveBeenCalledWith(screens);
    });

    it('should return false when no subscribers', () => {
      responsiveObserve.unregister();

      const screens = { xs: true };
      const result = responsiveObserve.dispatch(screens);

      expect(result).toBe(false);
    });
  });
});
