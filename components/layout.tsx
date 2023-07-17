import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>TuesdayJZ's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <main>{children}</main>
        <footer>
          <Link href="../pages/index.tsx">
            <a className="text-xl">Home</a>
          </Link>
          <Link href="../pages/about.tsx">
            <a className="text-xl">About</a>
          </Link>
          <Link href="../pages/blog.tsx">
            <a className="text-xl">Blog</a>
          </Link>
          <Link href="../pages/contact.tsx">
            <a className="text-xl">Contact</a>
          </Link>
        </footer>
      </div>
    </>
  )
}

export default Layout
