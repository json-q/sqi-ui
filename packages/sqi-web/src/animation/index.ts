import Bounce from './bounce';
import Collapse from './collapse';
import Fade from './fade';
import Slide from './slide';
import Transition from './transition';

export const Animation = {
  Fade,
  Collapse,
  Slide,
  Bounce,
  CSSTransition: Transition,
};

export type { FadeProps } from './fade';
export type { SlideProps, SlidePlacement } from './slide';
export type { CollapseProps, DIMENSION } from './collapse';
export type { BounceProps } from './bounce';

export default Animation;
