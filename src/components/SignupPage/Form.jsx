import { Formik, Form as FormikForm } from "formik";
import styles from './style.module.css'
import * as yup from 'yup'
import Input from "../common/Input";

const Form = () => {

  const bloodTypes = [ 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-' ]

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    bloodType: "",
    gender: "",
    age: ""
  }

  const validationSchema = yup.object({
    name: yup.string('Enter username please').required('username is required'),
    username: yup.string('Enter username please').required('username is required'),
    email: yup
    .string('Enter username please')
    .email('Invalid email format')
    .required('username is required'),
    password: yup
    .string('Enter password please')
    .required('password is required')
    .min(10, 'Minimum length is 10')
    .max(50, 'Maximum length is 50'),
    age: yup.number().required('age is required')
  })

  return ( 
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit = {(values) => console.log(values)}
    >
      <FormikForm className={`w-100 h-100 ${styles.center}`}>
        <Input name="email" className={styles['form-control']}/>
        <Input name="username" className={styles['form-control']}/>
        <Input name="name" className={styles['form-control']}/>
        <Input name="password" type="password" className={styles['form-control']}/>
        <div className="d-flex justify-content-between w-75">
          <Input name="age" placeholder="age" className={`${styles['form-control']} w-25`}/>
          <select className={`${styles.select} mx-4 mt-3`} name="gender">
            <option selected disabled>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className={`${styles.select} mt-3`}>
            <option selected disabled>Blood type</option>
            {bloodTypes.map(bloodType => (<option>{bloodType}</option>))}
          </select>
        </div>
        <button className={`${styles.btn} btn-dark w-50 mt-4`} type="submit">Submit</button>
      </FormikForm>

    </Formik>
   );
}
 
export default Form;
