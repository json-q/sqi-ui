import * as React from 'react';
import type { SVGProps } from 'react';
import Icon, { type IconProps } from '../components/Icon';
function LoadingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z"
        fill="currentColor"
        fillOpacity={0.9}
      />
    </svg>
  );
}
const IconComponent = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>((props, ref) => (
  <Icon svg={React.createElement(LoadingIcon)} type="loading" ref={ref} {...props} />
));
IconComponent.displayName = 'LoadingIcon';
export default IconComponent;
