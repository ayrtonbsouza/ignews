import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession()
  console.log(session)

  return session ? (
    <button className={styles.signInButton} onClick={() => signOut()} type="button">
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => signIn('github')} type="button">
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  )
}