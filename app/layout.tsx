import Footer from '@/components/footer'

import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ClerkProvider } from '@clerk/nextjs'



const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EDI STORE',
  description: 'EDI STORE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body className={font.className}>
      <ToastProvider />
      <ModalProvider />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  </ClerkProvider>
)
}

