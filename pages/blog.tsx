import Layout from "@/components/layout";
import Head from "next/head";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl">Welcome to my blog!</p>
      </div>
    </Layout>
  )
}
