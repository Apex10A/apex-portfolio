import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/components/header/page' // adjust the import path as needed

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praise Afolabi',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}