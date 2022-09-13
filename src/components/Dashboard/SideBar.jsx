import SideBaritem from "./SideBarItem";
import styles from './styles.module.css'

const SideBar = ({items}) => {
  return ( 
    <div className={styles.sideBar}>
      {items.map(item => (<SideBaritem item={item}/>))}
    </div>
   );
}
 
export default SideBar;
