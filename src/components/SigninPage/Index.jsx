import Form from "./Form";
import styles from './style.module.css'

const Index = () => {
  return ( 
    <div className={`${styles.center} ${styles.signup} bg-light`}>
      <div className={`w-50 ${styles.card}`}>
        <h1 className={`text-center w-100 bg-danger`}>Sign In</h1>
        <Form/>
      </div>
    </div>
   );
}
 
export default Index;
