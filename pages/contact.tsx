import Layout from '@/components/layout'
import Head from 'next/head'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Contact</h1>
        <p className='text-xl'>Contact me at <a href='mailto: moka010302@gmail.com'>moka010302@gmail.com</a></p>
        <p className='text-xl'>You can also find me on <a href='https://github.com/TuesdayJZ'>GitHub</a>.</p>
      </div>
    </Layout>
  )
}
