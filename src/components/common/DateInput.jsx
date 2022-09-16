import { Field } from "formik";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import FormControl from "./FormControl";

const DateInput = ({name, label}) => {
  
  return ( 
    <Field name={name}>
      {({form, field}) => {
        let {value} = field;
        let {setFieldValue} = form ;
        return (
          <FormControl name={name} label={label}>
            <DatePicker
              className="form-control mt-2"
              id={name}
              selected={value} 
              {...field}
              onChange = {value => setFieldValue(name, value)}
            />
          </FormControl>
        )
      }}
    </Field>
   );
}
 
export default DateInput;
