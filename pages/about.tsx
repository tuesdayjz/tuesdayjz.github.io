import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>About</h1>
        <Link href='/'>
          <a className='text-blue-500'>Home</a>
        </Link>
      </div>
    </>
  )
}
