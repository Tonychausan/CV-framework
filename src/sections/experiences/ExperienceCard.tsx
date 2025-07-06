import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

import type { ExperienceItem } from "../../types.ts"

interface ExperienceCardProps {
  experience: ExperienceItem
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-6 bg-gray-800 rounded-lg shadow-md overflow-hidden backdrop-blur-md border border-gray-700"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center p-4 text-left text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
      >
        <div>
          <h3 className="text-lg font-semibold">{experience.workTitle}</h3>
          <p className="text-sm text-gray-300">{experience.workplace}</p>
          <p className="text-sm text-gray-400">
            {experience.fromTime} – {experience.toTime}
          </p>
        </div>

        <motion.div
          animate={{ rotate: expanded ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-700"
          >
            <div className="px-4 py-4 text-sm text-gray-200 leading-relaxed bg-amber-950">
              {experience.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExperienceCard
