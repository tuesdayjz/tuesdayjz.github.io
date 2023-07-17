import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
