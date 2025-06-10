// fork: https://github.com/ant-design/ant-design/blob/master/components/_util/responsiveObserve.ts

export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type BreakpointMap = Record<Breakpoint, string>;

export type ScreenMap = Partial<Record<Breakpoint, boolean>>;

export const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

export const responsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

type SubscribeFunc = (screens: ScreenMap) => void;

const breakPointArray = Object.keys(responsiveMap) as Breakpoint[];
const subscribers = new Map<number, SubscribeFunc>();
let subUid = -1;
let screens = {};

type ResponseHandler = Record<
  string,
  {
    mql: MediaQueryList;
    listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
  }
>;

const responsiveObserve = {
  matchHandlers: {} as ResponseHandler,
  dispatch,
  subscribe,
  unsubscribe,
  register,
  unregister,
};

function dispatch(pointMap: ScreenMap) {
  screens = pointMap;
  subscribers.forEach((func) => func(screens));
  return subscribers.size >= 1;
}

function subscribe(func: SubscribeFunc): number {
  if (!subscribers.size) responsiveObserve.register();
  subUid += 1;
  subscribers.set(subUid, func);
  func(screens);
  return subUid;
}

function unsubscribe(token: number) {
  subscribers.delete(token);
  if (!subscribers.size) responsiveObserve.unregister();
}

function register() {
  breakPointArray.forEach((screen) => {
    const matchMediaQuery = responsiveMap[screen];
    const listener = ({ matches }: { matches: boolean }) => {
      responsiveObserve.dispatch({
        ...screens,
        [screen]: matches,
      });
    };
    const mql = window.matchMedia(matchMediaQuery);
    mql.addListener(listener);
    responsiveObserve.matchHandlers[matchMediaQuery] = {
      mql,
      listener,
    };

    listener(mql);
  });
}

function unregister() {
  breakPointArray.forEach((screen) => {
    const matchMediaQuery = responsiveMap[screen];
    const handler = responsiveObserve.matchHandlers[matchMediaQuery];
    handler?.mql.removeListener(handler?.listener);
  });
  subscribers.clear();
}

export default responsiveObserve;
