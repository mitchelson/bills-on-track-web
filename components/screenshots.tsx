"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Screenshots() {
  const [current, setCurrent] = useState(0)

  const screenshots = [
    {
      image: "/placeholder.svg?height=600&width=300",
      caption: "Dashboard - Get a quick overview of your finances",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      caption: "Add Bills - Easily add and categorize your expenses",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      caption: "Monthly Report - Visualize your spending patterns",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      caption: "Notifications - Set reminders for upcoming bills",
    },
    {
      image: "/placeholder.svg?height=600&width=300",
      caption: "Settings - Customize the app to your preferences",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % screenshots.length)
  }

  const prev = () => {
    setCurrent((current - 1 + screenshots.length) % screenshots.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section id="screenshots" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at the beautiful interface and powerful features.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="min-w-full flex flex-col items-center p-4 bg-white">
                  <div className="relative w-64 h-[500px] md:w-72 md:h-[550px]">
                    <Image
                      src={screenshot.image || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <p className="mt-6 text-lg text-gray-700 font-medium">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-green-600" : "bg-gray-300"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
