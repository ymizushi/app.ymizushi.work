import Head from 'next/head';

import styles from '@/styles/Home.module.css'

import { Header } from '@/components/pages/header/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>app.ymizushi.work</title>
        <meta
          name="ymizsuhi-next-app"
          content="ymizushi next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
