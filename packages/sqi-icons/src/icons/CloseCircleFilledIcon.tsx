import * as React from 'react';
import type { SVGProps } from 'react';
import Icon, { type IconProps } from '../components/Icon';
function CloseCircleFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>((props, ref) => (
  <Icon svg={React.createElement(CloseCircleFilledIcon)} type="close-circle-filled" ref={ref} {...props} />
));
IconComponent.displayName = 'CloseCircleFilledIcon';
export default IconComponent;
