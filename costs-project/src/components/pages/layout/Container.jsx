import { Outlet } from 'react-router-dom';
import styles from './Container.module.css';

function Container({ customClass }) {
  return (
    <div className={`${styles.container} ${customClass ? styles[customClass] : ''}`}>
      <Outlet />
    </div>
  );
}

export default Container;