import { createContext } from 'react';
import type { CheckboxOptions, CheckboxValue } from './type';

export interface CheckboxGroupContextType {
  name?: string;
  value: CheckboxValue[];
  disabled?: boolean;
  toggleOption?: (value: CheckboxOptions) => void;
  registerValue?: (val: CheckboxValue) => void;
  unregisterValue?: (val: CheckboxValue) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextType>({} as CheckboxGroupContextType);
