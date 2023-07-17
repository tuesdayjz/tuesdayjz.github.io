import Layout from '@/components/layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>About</h1>
        <p className='text-xl'>Welcome to my portfolio!</p>
        <p className='text-xl'>This is a Next.js app with Tailwind CSS + TypeScript.</p>
      </div>
    </Layout>
  )
}
