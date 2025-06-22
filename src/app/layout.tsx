import "./globals.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lily Song',
  icons: {
    icon: '/img/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="img/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
} 