export type Placement = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

export interface CoreToaster {
  id: string | number;
  toasterId?: string | number;
  placement?: Placement;
  duration?: number;
  onClose?: (toast: ExternalToast) => void;
  close?: boolean;
  disableClose?: boolean;
  _isDelete?: boolean;
  jsx?: React.ReactElement;
}

export interface ExternalToast extends Omit<CoreToaster, 'id'> {
  id?: string | number;
}

let toastsCounter = 1;

class ToastObserver {
  subscribers: Array<(toast: CoreToaster) => void>;
  toasts: Array<CoreToaster>;
  closedToasts: Set<string | number>;

  constructor() {
    this.subscribers = [];
    this.toasts = [];
    this.closedToasts = new Set();
  }

  subscribe = (subscriber: (toast: CoreToaster) => void) => {
    this.subscribers.push(subscriber);

    return () => {
      const index = this.subscribers.indexOf(subscriber);
      this.subscribers.splice(index, 1);
    };
  };

  publish = (data: CoreToaster) => {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    });
  };

  addToast = (data: CoreToaster) => {
    this.publish(data);
    this.toasts = [...this.toasts, data];
  };

  create = (data: ExternalToast & { jsx?: React.ReactElement }) => {
    const id = typeof data.id === 'undefined' ? toastsCounter++ : data.id;
    const alreadyExists = this.toasts.find((toast) => toast.id === id);

    // 如果此 id 在已标记收回的 toast 中，此时应为活跃状态，则从收回toast 中移除
    if (this.closedToasts.has(id)) {
      this.closedToasts.delete(id);
    }

    if (alreadyExists) {
      // id 在活跃列表中存在的，再次创建则视为更新，合并配置项，并进行广播
      this.toasts = this.toasts.map((toast) => {
        if (toast.id === id) {
          this.publish({ ...toast, ...data, id });
          return { ...toast, ...data, id };
        }

        return toast;
      });
    } else {
      this.addToast({ ...data, id });
    }

    return id;
  };

  add = (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => {
    const id = data?.id || toastsCounter++;
    this.create({ jsx: jsx(id), id, ...data });
    return id;
  };

  remove = (id?: number | string) => {
    if (id) {
      this.closedToasts.add(id);
      requestAnimationFrame(() => {
        this.subscribers.forEach((subscriber) => {
          subscriber({ id, close: true });
        });
      });
    } else {
      this.toasts.forEach((toast) => {
        this.subscribers.forEach((subscriber) => {
          subscriber({ id: toast.id, close: true });
        });
      });
    }

    return id;
  };
}

export const ToastState = new ToastObserver();

export const toast = Object.assign(
  {},
  {
    add: ToastState.add,
    remove: ToastState.remove,
  },
);
