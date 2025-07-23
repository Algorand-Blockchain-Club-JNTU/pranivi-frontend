import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://pranivi.com"), // Use your actual production URL
  title: {
    default: "Pranivi - Innovative Procurement Management",
    template: "%s | Pranivi", // Creates dynamic titles like "Dashboard | Pranivi"
  },
  description: "Streamline your procurement process with Pranivi's powerful management platform.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Pranivi - Innovative Procurement Management",
    description: "Streamline your procurement process with Pranivi's powerful management platform.",
    images: ["/og-image.png"], // Create and add this image to your /public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-slate-50 to-slate-100 text-slate-900 dark:bg-slate-900 dark:to-slate-950 dark:text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}