import * as React from 'react';
import type { ComponentType, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import IconContext from './Context';

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  svg: ReactNode;
  spin?: boolean;
  rotate?: number;
  type?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, type, spin, rotate, className, style, ...restProps } = props;
  const { prefixCls = 'sqi' } = React.useContext(IconContext);
  const module = `${prefixCls}-icon`;

  const classes = clsx(
    module,
    {
      [`${module}-spin`]: !!spin && !!svg,
    },
    className,
  );

  const outerStyle: React.CSSProperties = style || {};
  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }

  return (
    <span role="img" ref={ref} aria-label={type} className={classes} style={outerStyle} {...restProps}>
      {svg}
    </span>
  );
});

Icon.displayName = 'Icon';

const convertIcon = (Svg: ComponentType, iconType: string) => {
  const InnerIcon = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>((props, ref) => (
    <Icon svg={React.createElement(Svg)} type={iconType} ref={ref} {...props} />
  ));

  if (process.env.NODE_ENV === 'development') {
    InnerIcon.displayName = 'Icon';
  }
  return InnerIcon;
};

export { convertIcon };
export default Icon;
