"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started For Free!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download Bills On Track today and take control of your finances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-green-600 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Free Download</h3>
            <p className="text-green-100 mb-4">All the essential features you need</p>
            <div className="text-4xl font-bold text-white">$0</div>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Add unlimited bills and expenses</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Monthly visual reports and summaries</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Bill payment reminders and notifications</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Secure data storage on your device</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Regular updates and new features</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-center"
              >
                Download Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
