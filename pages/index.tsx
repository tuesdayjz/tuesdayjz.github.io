import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Hello World!</h1>
        <Link href='/about'>
          <a className='text-blue-500'>About</a>
        </Link>
      </div>
    </>
  )
}

export default Home
