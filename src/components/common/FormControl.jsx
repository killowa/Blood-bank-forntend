import { ErrorMessage } from "formik";
const FormControl = ({children, name = null, label = null}) => {
  console.log(children.props);
  return ( 
  <div className="my-3 w-75">
    {label && <label htmlFor={name}>{label}</label>}
    {children}
    <div className='error'>
      <ErrorMessage name={name} />
    </div>
  </div>
  )
}
 
export default FormControl;
