"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This app helped me save money every month! I can finally keep track of all my bills in one place.",
    },
    {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Beautiful design and very easy to use. The notifications feature is a lifesaver!",
    },
    {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I've tried many finance apps, but Bills On Track is by far the best. Simple, intuitive, and effective.",
    },
    {
      name: "David Kim",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Great app for keeping track of expenses. The visual reports help me understand where my money goes.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their financial management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
