import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "../components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deep Research",
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-screen antialiased`} suppressHydrationWarning>
          {children}
          <Toaster />
      </body>
    </html>
  )
}
