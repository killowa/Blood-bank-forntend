import {NavLink} from 'react-router-dom'
import styles from './styles.module.css'

const SideBaritem = ({item}) => {
  const {path, value} = item
  return (  
    <NavLink to={path} className={isActive => {
      let active = !isActive? styles.active: ''
      return `${active} ${styles.sideBarItem} p-5`
    }}>
      {value}
    </NavLink>
  );
}
 
export default SideBaritem;
