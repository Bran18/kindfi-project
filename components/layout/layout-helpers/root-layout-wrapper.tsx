import { AuthProvider } from '@/lib/hooks/use-auth'
import { ThemeProvider } from 'next-themes'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-52DWMZ7R1H"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52DWMZ7R1H');
          `}
        </script>
      </Head>
      <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
      </html>
    </>
  )
}
