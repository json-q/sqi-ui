import _Checkbox from './Checkbox';
import _CheckboxGroup from './CheckboxGroup';

type CompoundedComponent = typeof _Checkbox & {
  Group: typeof _CheckboxGroup;
};

const Checkbox = _Checkbox as CompoundedComponent;
Checkbox.Group = _CheckboxGroup;

export * from './type';
export { Checkbox };
export const CheckboxGroup = Checkbox.Group;

export default Checkbox;
