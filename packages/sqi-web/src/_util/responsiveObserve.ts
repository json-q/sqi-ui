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
  handlers: {} as ResponseHandler,
  dispatch(breakpointMatchStatus: ScreenMap) {
    screens = breakpointMatchStatus;
    subscribers.forEach((cb) => cb(screens));
    return subscribers.size >= 1;
  },
  subscribe(cb: SubscribeFunc): number {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, cb);
    cb(screens);
    return subUid;
  },
  unsubscribe(token: number) {
    subscribers.delete(token);
    if (!subscribers.size) this.unregister();
  },
  register() {
    breakPointArray.forEach((bp) => {
      const listener = ({ matches }: { matches: boolean }) => {
        this.dispatch({
          ...screens,
          [bp]: matches,
        });
      };

      const matchMediaQuery = responsiveMap[bp];
      const mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      this.handlers[matchMediaQuery] = {
        mql,
        listener,
      };

      listener(mql);
    });
  },
  unregister() {
    breakPointArray.forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      const handler = this.handlers[matchMediaQuery];
      handler?.mql.removeListener(handler?.listener);
    });
    subscribers.clear();
  },
};

export default responsiveObserve;
