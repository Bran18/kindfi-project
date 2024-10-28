import { AuthProvider } from '@/lib/hooks/use-auth'
import { ThemeProvider } from 'next-themes'
import { Header } from '../header/header'
import Footer from '../footer/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning>
      <AuthProvider>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer/>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </body>
  </html>
  )
}
