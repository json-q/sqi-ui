import * as React from 'react';
import type { TransitionProps } from './transition';
import Transition from './transition';

export interface BounceProps extends Omit<TransitionProps, 'name'> {}

const Bounce = React.forwardRef<HTMLElement, BounceProps>((props, ref) => {
  const { timeout = 200, ...restProps } = props;

  return <Transition ref={ref} {...restProps} timeout={timeout} name="bounce" />;
});

Bounce.displayName = 'Bounce';

export default Bounce;
