import FormCard from '../common/FormCard';
import Form from './Form'
import styles from './styles.module.scss'

const Index = () => {
  return (  
    <div className={`center ${styles.page}`}>
      <FormCard title='Request blood'>
        <Form/>
      </FormCard>
    </div>
  );
}
 
export default Index;
