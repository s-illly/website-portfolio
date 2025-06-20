import "./globals.css"

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