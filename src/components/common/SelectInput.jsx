import { Field } from "formik";

const SelectInput = ({options}) => {
  return ( 
    <Field as="select" name="bloodType" className= "select mt-3">
      {options.map(option => (<option key={option} value={option}>{option}</option>))}
    </Field>
   );
}
 
export default SelectInput;
