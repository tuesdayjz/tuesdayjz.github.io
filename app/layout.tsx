import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "tuesdayjz.github.io",
  description: "home page of tuesdayjz.github.io",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
