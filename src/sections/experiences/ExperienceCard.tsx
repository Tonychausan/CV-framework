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
      className="mb-4 border rounded-lg overflow-hidden shadow-2xl bg-stone-800 border-stone-900"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center p-4 text-left text-white hover:bg-stone-700 transition-colors duration-200 focus:outline-none"
      >
        <div>
          <h3 className="text-lg font-semibold">{experience.workTitle}</h3>
          <p className="text-sm text-red-300">{experience.workplace}</p>
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
            className="overflow-hidden text-white bg-stone-900"
          >
            <div className="px-4 py-4 text-sm leading-relaxed">
              {experience.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExperienceCard
