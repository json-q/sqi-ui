import * as React from 'react';
import type { TransitionProps } from './transition';
import Transition from './transition';

export interface FadeProps extends Omit<TransitionProps, 'name'> {}

const Fade = React.forwardRef<HTMLElement, FadeProps>((props, ref) => {
  const { timeout = 200, ...restProps } = props;

  return <Transition ref={ref} {...restProps} timeout={timeout} name="fade" />;
});

Fade.displayName = 'Fade';

export default Fade;
