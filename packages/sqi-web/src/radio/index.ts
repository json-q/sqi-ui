import _Radio from './Radio';
import _RadioButton from './RadioButton';
import _RadioGroup from './RadioGroup';

type CompoundedComponent = typeof _Radio & {
  Group: typeof _RadioGroup;
  Button: typeof _RadioButton;
};

const Radio = _Radio as CompoundedComponent;

Radio.Group = _RadioGroup;
Radio.Button = _RadioButton;

export * from './type';
export { Radio };
export const RadioGroup = Radio.Group;
export const RadioButton = Radio.Button;
export type { RadioProps, RadioGroupProps } from './type';

export default Radio;
