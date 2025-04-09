"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Cta() {
  return (
    <section id="download" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Bills On Track Today</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Take control of your finances and never miss a bill payment again.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="#"
            className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <Image src="/placeholder.svg?height=24&width=24" alt="App Store" width={24} height={24} />
            Download on App Store
          </Link>
          <Link
            href="#"
            className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <Image src="/placeholder.svg?height=24&width=24" alt="Google Play" width={24} height={24} />
            Get it on Google Play
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
