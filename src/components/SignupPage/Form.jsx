import { Formik, Field, Form as FormikForm } from "formik";
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import * as yup from 'yup'
import Input from "../common/Input";
import bloodTypes from "../../bloodTypes";

const Form = () => {

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
    name: yup.string('Enter name please').required('name is required'),
    username: yup.string('Enter username please').required('username is required'),
    email: yup
    .string('Enter email please')
    .email('Invalid email format')
    .required('email is required'),
    password: yup
    .string('Enter password please')
    .required('password is required')
    .min(10, 'Minimum length is 10')
    .max(50, 'Maximum length is 50'),
    age: yup.number().required('age is required'),
    gender: "",
    bloodType: ""
  })

  return ( 
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit = {(values) => {
        console.log(values)
      }}
    >
      <FormikForm className={`h-100 d-flex flex-column`}>
        <Input name="email" className={styles['form-control']}/>
        <Input name="username" className={styles['form-control']}/>
        <Input name="name" className={styles['form-control']}/>
        <Input name="password" type="password" className={styles['form-control']}/>
        <div className="d-flex justify-content-between w-75">
          <Input name="age" placeholder="age" className={`${styles['form-control']} w-25`}/>
          <div className="mx-4">
            <Field as="select" name="gender" className={`${styles.select} mt-3`} >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </Field>
            <span className={styles.subscript}>Gender</span>
          </div>

          <div>
            <Field as="select" name="bloodType" className="select mt-3">
              {bloodTypes.map(bloodType => (<option key={bloodType} value={bloodType}>{bloodType}</option>))}
            </Field>
            <div className={styles.subscript}>Blood type</div>
          </div>
        </div>
        <span className="my-2">Already have an account?<Link to='/signin'> signin</Link></span>
        <button className={`my-btn mx-auto w-50 my-4`} type="submit">Submit</button>
      </FormikForm>

    </Formik>
   );
}
 
export default Form;
