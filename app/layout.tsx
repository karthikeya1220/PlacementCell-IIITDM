import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'placement-iiitdm App',
  description: 'Created with placement-iiitdm',
  generator: 'placement-iiitdm.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
