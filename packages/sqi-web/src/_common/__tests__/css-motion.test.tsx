import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import CSSMotion, { type ChildCallbackResult, type CSSMotionInstance, type CSSMotionProps } from '../CSSMotion';

const InnerComponent = ({ children }: { children: CSSMotionProps['children'] }) => {
  const motionRef = React.useRef<CSSMotionInstance>(null);

  React.useEffect(() => {
    motionRef.current?.toggle(true);
  }, []);

  return (
    <CSSMotion ref={motionRef} timeout={500} prefixCls="sqi" name="fade" mountOnEnter preEnter>
      {children}
    </CSSMotion>
  );
};

describe('CSSMotion', () => {
  it('mounted renders correctly with element children', async () => {
    const { container } = render(
      <CSSMotion prefixCls="sqi" name="fade" initialEntered>
        <div>motion eLement child</div>
      </CSSMotion>,
    );

    // motion use setTimeout, is promise
    expect(container.firstChild).toBeInTheDocument();
    await waitFor(() => {
      expect(container.firstChild).toHaveClass('sqi-fade-motion-entered');
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('mounted renders correctly with function children', async () => {
    const childFn = vi.fn(({ className }) => <div className={className}>motion function child</div>);

    const { container } = render(
      <CSSMotion prefixCls="sqi" name="fade" initialEntered>
        {childFn}
      </CSSMotion>,
    );

    expect(container.firstChild).toBeInTheDocument();
    await waitFor(() => {
      expect(container.firstChild).toHaveClass('sqi-fade-motion-entered');
      expect(childFn).toHaveBeenCalledWith(
        expect.objectContaining<Partial<ChildCallbackResult>>({
          className: expect.stringContaining('sqi-fade-motion-entered'),
          status: 'entered',
          isMounted: true,
          isEnter: true,
        }),
      );
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should correctly className when prefixCls is empty', () => {
    const { container } = render(
      <CSSMotion name="fade" initialEntered>
        <div>motion eLement child</div>
      </CSSMotion>,
    );

    expect(container.firstChild).toHaveClass('sqi-fade-motion-entered');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should status is entering with motion when toggle process', async () => {
    const childFn = vi.fn(({ className }) => <div className={className}>motion function child</div>);

    const { container: elContainer } = render(
      <InnerComponent>
        <div>motion element child</div>
      </InnerComponent>,
    );
    const { container: fnContainer } = render(<InnerComponent>{childFn}</InnerComponent>);

    expect(elContainer.firstChild).toHaveClass('sqi-fade-motion-preEnter');
    expect(fnContainer.firstChild).toHaveClass('sqi-fade-motion-preEnter');

    await waitFor(
      () => {
        expect(elContainer.firstChild).toHaveClass('sqi-fade-motion-entering');
        expect(fnContainer.firstChild).toHaveClass('sqi-fade-motion-entering');
        expect(childFn).toHaveBeenCalledWith(
          expect.objectContaining<Partial<ChildCallbackResult>>({
            className: expect.stringContaining('sqi-fade-motion-entering'),
            status: 'entering',
            isEnter: true,
            isMounted: true,
          }),
        );
      },
      { timeout: 100 },
    );

    expect(elContainer.firstChild).toMatchSnapshot();
    expect(fnContainer.firstChild).toMatchSnapshot();
  });

  it('should status is entered with motion when toggle completed', async () => {
    const childFn = vi.fn(({ className }) => <div className={className}>motion function child</div>);

    const { container: elContainer } = render(
      <InnerComponent>
        <div>motion element child</div>
      </InnerComponent>,
    );
    const { container: fnContainer } = render(<InnerComponent>{childFn}</InnerComponent>);

    await waitFor(
      () => {
        expect(elContainer.firstChild).toHaveClass('sqi-fade-motion-entered');
        expect(fnContainer.firstChild).toHaveClass('sqi-fade-motion-entered');
      },
      { timeout: 600 },
    );
  });

  it('should not merge className whit text node', () => {
    const { container } = render(
      // @ts-expect-error
      <CSSMotion prefixCls="sqi" name="fade" initialEntered>
        motion eLement child
      </CSSMotion>,
    );

    expect(container.firstChild).instanceOf(Text);
  });
});
