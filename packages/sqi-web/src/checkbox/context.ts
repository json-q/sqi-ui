import { createContext } from 'react';
import type { CheckboxValue } from './type';

export interface CheckboxGroupContextType {
  name?: string;
  value: CheckboxValue[];
  disabled?: boolean;
  toggleOption?: (value: CheckboxValue) => void;
  registerValue?: (val: CheckboxValue) => void;
  unregisterValue?: (val: CheckboxValue) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextType>({} as CheckboxGroupContextType);
