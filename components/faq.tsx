"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Faq() {
  const faqs = [
    {
      question: "Is the app free?",
      answer: "Yes, Bills On Track is completely free to download and use. We offer all essential features at no cost.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes, the app works offline. Your data is stored locally on your device, so you can access and manage your bills even without an internet connection.",
    },
    {
      question: "How do I track my expenses?",
      answer:
        "Simply tap the '+' button to add a new expense. You can categorize it, add the amount, set the due date, and even attach a photo of the receipt if needed.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. Your financial data is stored locally on your device and is not shared with our servers unless you explicitly enable cloud backup. We use industry-standard encryption to protect your information.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your financial data in CSV format, which can be opened in spreadsheet applications like Excel or Google Sheets for further analysis.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Bills On Track.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
