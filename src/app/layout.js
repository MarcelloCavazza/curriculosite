import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const language = navigator.language === "pt-BR" ? "pt-BR" : "en";

  return (
    <html lang={language}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Currículo Cavazza",
  description: "Meu currículo!",
}
