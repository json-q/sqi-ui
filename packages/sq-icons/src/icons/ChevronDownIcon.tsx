import * as React from 'react';
import type { SVGProps } from 'react';
import { convertBaseIcon } from '../components/BaseIcon';
function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertBaseIcon(ChevronDownIcon, 'chevron-down');
export default IconComponent;
