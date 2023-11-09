import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang={"en"}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Cavazza's Resume",
  description: "Cavazza's Resume",
}
