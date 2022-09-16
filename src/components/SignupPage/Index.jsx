import FormCard from "../common/FormCard";
import Form from "./Form";
import styles from './style.module.scss'

const Index = () => {
  return ( 
    <div className={`${styles.signup} center bg-light`}>
      <FormCard title='Sign up'>
        <Form/>
      </FormCard>
    </div>
   );
}
 
export default Index;
