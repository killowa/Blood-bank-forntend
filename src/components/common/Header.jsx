import {Link} from 'react-router-dom'
import styles from './styles.module.scss'
const Header = () => {

  const navItems = ['About', 'Contact', 'Logout']

  return (
    <nav className={`${styles.nav} navbar`}>
      <div className={styles.containerFluid}>
        <Link to='/' className={styles.brand} >Blood bank</Link>
        <div className="ms-auto">
          {navItems.map((item) => 
            (<Link key={item} to='#'>{item}</Link>)
          )}
        </div>
      </div>
    </nav>
  );
}
 
export default Header;
