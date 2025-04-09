import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bills On Track - Stay in control of your finances with ease",
  description:
    "Bills On Track is a mobile app that helps you manage your bills, track expenses, and stay on top of your finances with beautiful visualizations and timely reminders.",
  keywords: "bills, finance, expense tracker, budget app, money management",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'