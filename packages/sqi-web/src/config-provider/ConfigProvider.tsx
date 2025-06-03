'use client';
import React, { Fragment } from 'react';
import { omit } from '@sqi-ui/utils';
import { useMergeProps } from '@sqi-ui/hooks';
import { IconContext } from '@sqi-ui/icons';
import { ConfigContext, defaultConfigProps } from './context';
import type { ConfigProviderProps } from './type';

export default function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps(baseProps, defaultConfigProps);
  const { iconPrefix, children } = props;
  const providerValue = omit(props, ['children', 'iconPrefix']);

  const IconProviderPlaceholder = iconPrefix ? IconContext.Provider : Fragment;

  return (
    <ConfigContext.Provider value={providerValue}>
      <IconProviderPlaceholder value={{ prefixCls: iconPrefix }}>{children}</IconProviderPlaceholder>
    </ConfigContext.Provider>
  );
}

ConfigProvider.displayName = 'ConfigProvider';
