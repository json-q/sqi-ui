interface PositionOptions {
  flip?: boolean;
  arrow?: boolean;
}

interface ElementCollection {
  reference: HTMLElement;
  floating: HTMLElement;
  arrow?: HTMLElement;
}
export function computedPosition(doms: ElementCollection, options: PositionOptions) {
  const { reference, floating } = doms;
  if (!reference || !floating) return;
  console.log(options);
}
