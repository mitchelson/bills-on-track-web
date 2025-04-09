"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Bills On Track</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Stay in control of your finances with ease.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#download"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <Image src="/placeholder.svg?height=24&width=24" alt="App Store" width={24} height={24} />
                App Store
              </Link>
              <Link
                href="#download"
                className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <Image src="/placeholder.svg?height=24&width=24" alt="Google Play" width={24} height={24} />
                Google Play
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-[500px] md:w-80 md:h-[600px]">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Bills On Track App"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="#features"
            className="flex flex-col items-center text-gray-500 hover:text-green-600 transition-colors"
          >
            <span className="text-sm mb-2">Learn More</span>
            <ArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
