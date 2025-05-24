import React, { Fragment } from 'react';
import { IconContext } from '@sq-ui/icons';
import type { ConfigProviderProps } from './type';
import { ConfigContext, defaultConfigProps } from './context';
import { omit } from 'lodash-es';
import { useMergeProps } from '@sq-ui/hooks';

function NormalConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps(baseProps, defaultConfigProps);
  const { iconPrefix, children } = props;
  const providerValue = omit(props, 'children', 'iconPrefix');
  console.log('render------');

  const IconProviderPlaceholder = iconPrefix ? IconContext.Provider : Fragment;

  return (
    <ConfigContext.Provider value={providerValue}>
      <IconProviderPlaceholder value={{ prefixCls: iconPrefix }}>{children}</IconProviderPlaceholder>
    </ConfigContext.Provider>
  );
}

const ConfigProvider = React.memo(NormalConfigProvider, Object.is);

export default ConfigProvider;

ConfigProvider.displayName = 'ConfigProvider';
