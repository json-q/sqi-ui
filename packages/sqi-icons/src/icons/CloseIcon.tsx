import * as React from 'react';
import type { SVGProps } from 'react';
import Icon, { type IconProps } from '../components/Icon';
function CloseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>((props, ref) => (
  <Icon svg={React.createElement(CloseIcon)} type="close" ref={ref} {...props} />
));
IconComponent.displayName = 'CloseIcon';
export default IconComponent;
