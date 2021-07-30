import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface Props {
  priceId: string;
}

export const SubscribeButton: React.VFC<Props> = () => {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscribe(): Promise<void> {
    if (!session) {
      signIn('github');
      return;
    }
    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }
    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};
