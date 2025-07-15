import React, { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

import type { LanguageItem } from "../../types"

interface Props {
  language: LanguageItem
}

const LanguageCard: React.FC<Props> = ({ language }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const [startBarAnimation, setStartBarAnimation] = useState(false)

  useEffect(() => {
    if (isInView) {
      // Start the inner animation 0.6s after the card animation starts (duration of outer motion)
      const timer = setTimeout(() => {
        setStartBarAnimation(true)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      ref={ref}
      className="bg-gray-800 border border-gray-700 rounded-lg shadow p-4 text-white space-y-2"
    >
      <h3 className="text-lg font-semibold">{language.language}</h3>

      <div className="w-full h-3 bg-gray-600 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: startBarAnimation ? `${(language.level / 10) * 100}%` : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-amber-400 rounded"
        />
      </div>

      <p className="text-sm text-gray-400">
        Proficiency: {language.level} / 10
      </p>
    </motion.div>
  )
}

export default LanguageCard
