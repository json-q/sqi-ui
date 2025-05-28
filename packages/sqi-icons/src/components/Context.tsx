import * as React from 'react';

export interface IconContextProps {
  prefixCls?: string;
}

const IconContext = React.createContext<IconContextProps>({});

export default IconContext;
