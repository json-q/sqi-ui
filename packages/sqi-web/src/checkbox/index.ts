import _Checkbox from './Checkbox';

type CompoundedComponent = typeof _Checkbox & {
  Group: any;
};

const Checkbox = _Checkbox as CompoundedComponent;

export * from './type';
export { Checkbox };
export const CheckboxGroup = Checkbox.Group;

export default Checkbox;
