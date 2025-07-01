import "./globals.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lily Song',
  icons: {
    icon: '/imgs/icon.webp',
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
        <link rel="icon" href="/imgs/icon.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
} 