"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './styles.module.css';

const links = [
   { name: 'Campaigns', href: '/campaigns' },
   { name: 'Locations', href: '/campaign/locations' },
   { name: 'People', href: '/campaign/people' },
   { name: 'Items', href: '/campaign/items' },
   { name: 'Story', href: '/campaign/story' },
];

export default function Sidebar() {
   const pathname = usePathname();

   return (
      <div className={styles.sidebar}>
         <div className={styles['link-container']}>
            <Link href="/profile" className={styles.link}>Username</Link>
            {links.map(link => (
               <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(styles.link, { [styles['link-active']]: pathname === link.href })}
               >
                  {link.name}
               </Link>
            ))}
         </div>
         <Link href="/" className={styles.link}>
            Log Out
         </Link>
      </div>
   );
}
