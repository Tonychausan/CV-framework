import React from "react"
import { motion } from "framer-motion"

import type { EducationItem } from "../../types.ts"

interface EducationCardProps {
  education: EducationItem
}

const EductionCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold text-white">{education.name}</h3>
      <p className="text-sm text-gray-300 font-medium">{education.education}</p>
      <p className="text-sm text-gray-400 mb-2">
        {education.fromTime} – {education.toTime}
      </p>
      <p className="text-sm text-gray-200 leading-relaxed">
        {education.description}
      </p>
    </motion.div>
  )
}

export default EductionCard
