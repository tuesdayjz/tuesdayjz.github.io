import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <p>Welcome to my portfolio!</p>
    </Layout>
  )
}

export default Home
