import { Formik, Form as FormikForm } from "formik";
import Input from "../common/Input";
import * as yup from 'yup'
import DateInput from "../common/DateInput";
import SelectInput from "../common/SelectInput";
import bloodTypes from "../../bloodTypes";


const RequestBlood = () => {

  const initialValues = {
    date: new Date()
  }

  const validationSchema = yup.object({
    date: yup.date().min(new Date())
  })

  return ( 
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit = {(values) => {
        console.log(values);
      }}
    >
      <FormikForm className="form">
        <DateInput name='date' label='Recieve date' />
        <Input name='patient' className='form-control' placeholder='patient' />
        <div className="d-flex">
          <SelectInput options={bloodTypes}/>
          <Input name='bloodAmount' placeholder='amount' className='ms-3 w-fit form-control'/>
        </div>
      </FormikForm>

    </Formik>
   );
}
 
export default RequestBlood;
