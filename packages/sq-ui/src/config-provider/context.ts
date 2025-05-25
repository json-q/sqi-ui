import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sq',
  iconPrefix: 'sq',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
