import { createContext } from 'react';
import type { RadioGroupContextState } from './type';

const RadioGroupContext = createContext<RadioGroupContextState>({});

export default RadioGroupContext;
