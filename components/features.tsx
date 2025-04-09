"use client"

import { motion } from "framer-motion"
import { PlusCircle, BarChart3, DollarSign, Bell, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <PlusCircle className="w-10 h-10 text-green-600" />,
      title: "Add and manage bills easily",
      description: "Quickly add your bills and recurring expenses with just a few taps.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-600" />,
      title: "Visual monthly summaries",
      description: "See your spending patterns with beautiful charts and graphs.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
      title: "Track income and expenses",
      description: "Keep track of all your money movements in one convenient place.",
    },
    {
      icon: <Bell className="w-10 h-10 text-green-600" />,
      title: "Smart notifications",
      description: "Never miss a payment with timely reminders for upcoming bills.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: "Secure and private data",
      description: "Your financial information stays on your device, protected and private.",
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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Bills On Track?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our app makes managing your finances simple and stress-free.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
