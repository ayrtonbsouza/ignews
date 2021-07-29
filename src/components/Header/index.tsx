import Image from 'next/image'
import Link from 'next/link'
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="ig.news" width={110} height={31} />
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a className={styles.active} >Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}