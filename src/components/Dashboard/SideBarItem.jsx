import styles from './styles.module.css'
const SideBaritem = ({item}) => {
  return (  
    <div className={`${styles.sideBarItem} p-5`}>
      {item}
    </div>
  );
}
 
export default SideBaritem;
