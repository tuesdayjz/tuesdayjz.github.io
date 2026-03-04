import ClientLayout from "./ClientLayout";
import { Metadata } from "next";
import { ReactNode } from "react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://tuesdayjz.github.io"),
  title: {
    default: "tuesdayjz",
    template: "%s | tuesdayjz",
  },
  description: `${siteConfig.name}'s personal site — portfolio, notes, and blog.`,
  authors: [{ name: siteConfig.name }],
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🫑</text></svg>" },
  openGraph: {
    type: "website",
    siteName: "tuesdayjz",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    creator: "@vegetable_umai",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
