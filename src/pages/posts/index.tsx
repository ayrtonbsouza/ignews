import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {

  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2020</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar.</p>
          </a>
          <a href="">
            <time>12 de março de 2020</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar.</p>
          </a>
          <a href="">
            <time>12 de março de 2020</time>
            <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
            <p>Trabalhar com mapas em aplicações móveis é bem divertido e existem vários casos de uso interessantes para aplicar.</p>
          </a>
        </div>
      </main>
    </>
  )
}