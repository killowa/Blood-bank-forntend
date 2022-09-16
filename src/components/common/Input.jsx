import { Field } from "formik";
import FormControl from "./FormControl";
import styles from './styles.module.scss'
const Input = ({id, name, type, placeholder, className, label}) => {
  return ( 
    <FormControl name={name} label={label}>
      <Field 
        name={name}
        id={id || name}
        type={type || "text"}
        className={className || `${styles['form-control']}`}
        placeholder = {placeholder || `Enter your ${name} please`}/> 
    </FormControl>
  )
}
 
export default Input;
