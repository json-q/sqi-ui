import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as React from 'react';
import { composeRef, fillRef, useComposeRef, supportRef, supportNodeRef } from '../ref';
import { render, renderHook } from '@testing-library/react';

// 创建一个变量来保存模拟的React版本
let mockReactVersion = '18.0.0';

// 模拟react模块以允许控制version导出
vi.mock('react', async () => {
  const actualReact = await vi.importActual('react');
  return {
    ...actualReact,
    get version() {
      return mockReactVersion;
    },
  };
});

describe('ref utilities', () => {
  beforeEach(() => {
    mockReactVersion = '18.0.0';
  });

  describe('fillRef', () => {
    it('should call function ref with node', () => {
      const ref = vi.fn();
      const node = document.createElement('div');
      fillRef(ref, node);
      expect(ref).toHaveBeenCalledWith(node);
    });

    it('should set current property of object ref', () => {
      const ref = { current: null };
      const node = document.createElement('div');
      fillRef(ref, node);
      expect(ref.current).toBe(node);
    });

    it('should not throw error for null ref', () => {
      expect(() => fillRef(null, document.createElement('div'))).not.toThrow();
    });
  });

  describe('composeRef', () => {
    it('should return undefined when no refs provided', () => {
      expect(composeRef()).toBeUndefined();
    });

    it('should return the only ref when one ref provided', () => {
      const ref = vi.fn();
      expect(composeRef(ref)).toBe(ref);
    });

    it('should compose multiple function refs', () => {
      const ref1 = vi.fn();
      const ref2 = vi.fn();
      const node = document.createElement('div');

      const composedRef = composeRef(ref1, ref2);
      (composedRef as React.RefCallback<HTMLDivElement>)(node);

      expect(ref1).toHaveBeenCalledWith(node);
      expect(ref2).toHaveBeenCalledWith(node);
    });

    it('should compose multiple object refs', () => {
      const ref1 = React.createRef<HTMLDivElement>();
      const ref2 = React.createRef<HTMLDivElement>();
      const node = document.createElement('div');

      const composedRef = composeRef(ref1, ref2);
      (composedRef as React.RefCallback<HTMLDivElement>)(node);

      expect(ref1.current).toBe(node);
      expect(ref2.current).toBe(node);
    });

    it('should compose mixed refs', () => {
      const ref1 = vi.fn();
      const ref2 = React.createRef<HTMLDivElement>();
      const node = document.createElement('div');

      const composedRef = composeRef(ref1, ref2);
      (composedRef as React.RefCallback<HTMLDivElement>)(node);

      expect(ref1).toHaveBeenCalledWith(node);
      expect(ref2.current).toBe(node);
    });
  });

  describe('useComposeRef', () => {
    it('should compose refs with hook', () => {
      const ref1 = vi.fn();
      const ref2 = React.createRef<HTMLDivElement>();

      const TestComponent = () => {
        const composedRef = useComposeRef(ref1, ref2);
        return (
          <div ref={composedRef} data-testid="test">
            Test
          </div>
        );
      };

      const { getByTestId } = render(<TestComponent />);

      expect(ref1).toHaveBeenCalledWith(getByTestId('test'));
      expect(ref2.current).toBe(getByTestId('test'));
    });

    it('should return same ref when refs are not changed', () => {
      const ref1 = vi.fn();
      const { result, rerender } = renderHook(({ ref1 }) => useComposeRef(ref1), { initialProps: { ref1 } });
      const firstRef = result.current;

      rerender({ ref1 });
      expect(result.current).toBe(firstRef);
    });

    it('should return new ref when refs changed', () => {
      const ref1 = vi.fn();
      const ref2 = vi.fn();
      const { result, rerender } = renderHook(({ refs }) => useComposeRef(...refs), { initialProps: { refs: [ref1] } });
      const firstRef = result.current;

      rerender({ refs: [ref1, ref2] });
      expect(result.current).not.toBe(firstRef);
    });
  });

  describe('supportRef', () => {
    it('should return false for falsy values', () => {
      expect(supportRef(null)).toBe(false);
      expect(supportRef(undefined)).toBe(false);
    });

    it('should return true for React 19+ elements', () => {
      mockReactVersion = '19.0.0';

      const element = React.createElement('div');
      expect(supportRef(element)).toBe(true);
    });

    it('should return false for React 19+ function components without forwardRef', () => {
      mockReactVersion = '19.0.0';

      const FunctionComponent = () => <div />;
      expect(supportRef(FunctionComponent)).toBe(false);
    });

    it('should return true for forwardRef components', () => {
      const ForwardRefComponent = React.forwardRef(() => <div />);
      expect(supportRef(ForwardRefComponent)).toBe(true);
    });

    it('should return true for class components', () => {
      class ClassComponent extends React.Component {
        render() {
          return <div />;
        }
      }
      expect(supportRef(ClassComponent)).toBe(true);
    });

    it('should return false for function components without forwardRef in React 18', () => {
      mockReactVersion = '18.0.0';

      const FunctionComponent = () => <div />;
      expect(supportRef(FunctionComponent)).toBe(false);
    });

    it('should handle memo components', () => {
      const FunctionComponent = () => <div />;
      const MemoComponent = React.memo(FunctionComponent);
      expect(supportRef(MemoComponent)).toBe(false);
    });
  });

  describe('supportNodeRef', () => {
    it('should return false for non-elements', () => {
      expect(supportNodeRef(null)).toBe(false);
      expect(supportNodeRef('string')).toBe(false);
      expect(supportNodeRef(123)).toBe(false);
    });

    it('should return true for elements that support ref in React 19+', () => {
      mockReactVersion = '19.0.0';

      const element = React.createElement('div');
      expect(supportNodeRef(element)).toBe(true);
    });

    it('should return false for elements that do not support ref', () => {
      mockReactVersion = '18.0.0';

      const FunctionComponent = () => <div />;
      const element = React.createElement(FunctionComponent);

      expect(supportNodeRef(element)).toBe(false);
    });
  });
});
