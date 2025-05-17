import * as React from 'react';
import type { ComponentType, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BaseIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  svg: ReactNode;
  type?: string;
}

const BaseIcon = React.forwardRef<HTMLSpanElement, BaseIconProps>((props, ref) => {
  const { svg, type, ...restProps } = props;

  return (
    <span role="img" ref={ref} aria-label={type} {...restProps}>
      {svg}
    </span>
  );
});

BaseIcon.displayName = 'Icon';

const convertBaseIcon = (Svg: ComponentType, iconType: string) => {
  const InnerIcon = React.forwardRef<HTMLSpanElement, Omit<BaseIconProps, 'svg' | 'type'>>((props, ref) => (
    <BaseIcon svg={React.createElement(Svg)} type={iconType} ref={ref} {...props} />
  ));

  if (process.env.NODE_ENV === 'development') {
    InnerIcon.displayName = 'BaseIcon';
  }
  return InnerIcon;
};

export { convertBaseIcon };
export default BaseIcon;
