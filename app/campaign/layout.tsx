import Sidebar from './Sidebar';
import styles from './styles.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className={styles.layout}>
         <div><Sidebar /></div>
         <div className={styles.dashboard}>{children}</div>
      </div>
   );
}
