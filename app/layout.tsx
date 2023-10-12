import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarWithCTAButton from './components/NavbarWithCTAButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackaton 2023',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWithCTAButton />
        <main className="flex min-h-screen flex-col items-center p-24">
          {children}
        </main>
      </body>
    </html>
  )
}
