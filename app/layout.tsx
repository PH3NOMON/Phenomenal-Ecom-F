
import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from "@/components/theme-provider"

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="Dark"
            enableSystem
            disableTransitionOnChange
        
          >
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
