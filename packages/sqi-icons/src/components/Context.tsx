import React, { type Context } from 'react';

export interface IconContextProps {
  prefixCls?: string;
}

const IconContext: Context<IconContextProps> = React.createContext<IconContextProps>({});

export default IconContext;
