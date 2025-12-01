import * as React from 'react';
import type { TransitionProps } from './transition';
import Transition from './transition';

export type SlidePlacement = 'top' | 'right' | 'bottom' | 'left';

export interface SlideProps extends Omit<TransitionProps, 'name'> {
  placement?: SlidePlacement;
}

const Slide = React.forwardRef<HTMLElement, SlideProps>((props, ref) => {
  const { timeout = 200, placement = 'top', ...restProps } = props;

  return <Transition ref={ref} {...restProps} timeout={timeout} name={`slide-${placement}`} />;
});

Slide.displayName = 'Slide';

export default Slide;
