import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "s.illly",
  description: "Personal portfolio and 3D model viewer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 