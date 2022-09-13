import { Formik, Form as FormikForm } from "formik";
import Input from "../common/Input";
import styles from './style.module.css'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import routes from "../../Routes";

const Form = () => {
  const navigate = useNavigate()

  const initialValues = {
    username: "",
    password: ""
  }

  const validationSchema = yup.object({
    username: yup.string('Enter username please').required('username is required'),
    password: yup
    .string('Enter password please')
    .required('password is required')
    .min(10, 'Minimum length is 10')
    .max(50, 'Maximum length is 50')
  })

  return ( 
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit = {(values) => {
        navigate(routes.dashboard)
      }}
    >
      <FormikForm className={`w-100 h-100 ${styles.center}`}>
        <Input name="username" />
        <Input name="password" type="password" />
        <span>Don't have an account?<Link to='/signup'> signup</Link></span> 
        <button className={`${styles.btn} w-50 my-4`} type="submit">Submit</button>
      </FormikForm>

    </Formik>
   );
}
 
export default Form;
