import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlirtLabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>FlirtLabs</h1>
        <h3>Let's do this shit</h3>
        <Button
          type='submit'
          onClick={() => {alert('Hello world')}}
        >
          Get started
        </Button>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
