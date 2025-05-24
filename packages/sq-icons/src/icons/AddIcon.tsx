import * as React from 'react';
import type { SVGProps } from 'react';
import { convertIcon } from '../components/Icon';
function AddIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z" fill="currentColor" />
    </svg>
  );
}
const IconComponent = convertIcon(AddIcon, 'add');
export default IconComponent;
