import { createContext } from 'react';

export interface RowContextState {
  gutter?: [number, number];
  wrap?: boolean;
}

const RowContext = createContext({});

export default RowContext;
