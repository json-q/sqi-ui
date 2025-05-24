import React from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sq',
  iconPrefix: 'sq',
};

export const ConfigContext = React.createContext<ConfigProviderProps>(defaultConfigProps);
