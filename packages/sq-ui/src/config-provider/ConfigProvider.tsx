import React, { Fragment } from 'react';
import { IconContext } from '@sq-ui/icons';
import type { ConfigProviderProps } from './type';
import { ConfigContext, defaultConfigProps } from './context';
import { omit } from 'lodash-es';
import { useMergeProps as useP } from '@sq-ui/hooks';

export default function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useP(baseProps, defaultConfigProps);
  const { iconPrefix, children } = props;
  const providerValue = omit(props, 'children', 'iconPrefix');

  const IconProviderPlaceholder = iconPrefix ? IconContext.Provider : Fragment;

  return (
    <ConfigContext.Provider value={providerValue}>
      <IconProviderPlaceholder value={{ prefixCls: iconPrefix }}>{children}</IconProviderPlaceholder>
    </ConfigContext.Provider>
  );
}
