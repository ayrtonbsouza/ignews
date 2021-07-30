import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface Props {
  product: {
    priceId: string;
    amount: number;
  };
}

const Home: React.VFC<Props> = ({ product }) => (
  <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏🏻 &nbsp; Hey, welcome</span>
        <h1>
          News about the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publication <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>
      <Image
        src="/images/avatar.svg"
        alt="Girl coding"
        width={336}
        height={521}
      />
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JG7xkLAgEDrMmHvqVF06LHO');
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
