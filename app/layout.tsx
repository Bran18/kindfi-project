import { Providers } from "@/components/layout/providers";
import "./globals.css";
import RootLayoutWrapper from "@/components/layout/layout-helpers/root-layout-wrapper";
import Head from "next/head";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "KindFi",
  description:
    "The first Web3 platform connecting supporters to impactful causes while driving blockchain adoption for social and environmental change",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google tag (gtag.js) */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-52DWMZ7R1H"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52DWMZ7R1H');
          `}
        </script>
      </Head>
      <body>
        <Providers>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
