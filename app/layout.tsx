import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nomadic Memo - Discover Your Next Adventure",
    template: "%s | Nomadic Memo",
  },
  description:
    "Explore comprehensive travel guides, insider tips, and customized itineraries for your dream destinations.",
  keywords: ["travel", "destinations", "travel guides", "itinerary", "adventure"],
  authors: [{ name: "Nomadic Memo Team" }],
  creator: "Nomadic Memo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomadic-memo.com",
    title: "Nomadic Memo - Discover Your Next Adventure",
    description:
      "Explore comprehensive travel guides, insider tips, and customized itineraries for your dream destinations.",
    siteName: "Nomadic Memo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomadic Memo - Discover Your Next Adventure",
    description:
      "Explore comprehensive travel guides, insider tips, and customized itineraries for your dream destinations.",
    creator: "@nomadicmemo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
