import { Formik, Form as FormikForm } from "formik";
import Input from "../common/Input";
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import routes from "../../Routes";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = yup.object({
    email: yup.string('Enter email please').email().required('email is required'),
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
      onSubmit = {async (values) => {
        await axios.post('/user/login', values)
        navigate(routes.dashboard)
      }}
    >
      <FormikForm className={`w-100 h-100 center`}>
        <Input name="username" />
        <Input name="password" type="password" />
        <span>Don't have an account?<Link to='/signup'> signup</Link></span> 
        <button className={`my-btn w-50 my-4`} type="submit">Submit</button>
      </FormikForm>

    </Formik>
   );
}
 
export default Form;
