import { Providers } from "@/components/layout/providers";
import "./globals.css";
import { RootLayoutWrapper } from "@/components/layout/layout-helpers/root-layout-wrapper";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "KindFi",
  description: "Web3 colaborando en el mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
