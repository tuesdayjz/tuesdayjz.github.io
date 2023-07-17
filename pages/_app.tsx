import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
      <div className='text-center'>
        <Link href='/'>
          <a className='text-blue-500'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='text-blue-500'>About</a>
        </Link>
        <Link href='/blog'>
          <a className='text-blue-500'>Blog</a>
        </Link>
        <Link href='/contact'>
          <a className='text-blue-500'>Contact</a>
        </Link>
      </div>
    </>
  );
};
