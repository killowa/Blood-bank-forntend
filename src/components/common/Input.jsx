import { Field, ErrorMessage } from "formik";
import styles from './styles.module.css'
const Input = ({id, name, type, placeholder, className}) => {
  return ( 
  <div className="my-3 w-75">
    <Field 
      name={name}
      id={id || name}
      type={type || "text"}
      className={className || `${styles['form-control']}`}
      placeholder = {placeholder || `Enter your ${name} please`}/> 
    <div className={styles.error}>
      <ErrorMessage name={name} />
    </div>
  </div>
  )
}
 
export default Input;
