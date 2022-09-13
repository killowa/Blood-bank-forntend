import { Formik, ErrorMessage, Form as FormikForm } from "formik";
import Input from "../common/Input";
import styles from './style.module.css'
import * as yup from 'yup'

const Form = () => {
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
      onSubmit = {(values) => console.log(values)}
    >
      <FormikForm className={`w-100 h-100 ${styles.center}`}>
        <Input name="username" />
        <Input name="password" type="password" />
        <button className={`${styles.btn} btn-dark w-50 my-4`} type="submit">Submit</button>
      </FormikForm>

    </Formik>
   );
}
 
export default Form;
