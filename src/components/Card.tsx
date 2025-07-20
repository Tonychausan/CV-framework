import React, { type ReactNode } from "react"
import { motion } from "framer-motion"

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
}

const Card: React.FC<CardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-lg shadow border p-4 bg-stone-800 border-stone-900 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
