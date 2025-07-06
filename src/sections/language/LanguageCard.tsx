import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

import type { LanguageItem } from "../../types"

interface Props {
  language: LanguageItem
}

const LanguageCard: React.FC<Props> = ({ language }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div
      ref={ref}
      className="bg-gray-800 border border-gray-700 rounded-lg shadow p-4 text-white space-y-2"
    >
      <h3 className="text-lg font-semibold">{language.language}</h3>

      <div className="w-full h-3 bg-gray-600 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: isInView ? `${(language.level / 10) * 100}%` : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-amber-400 rounded"
        />
      </div>

      <p className="text-sm text-gray-400">
        Proficiency: {language.level} / 10
      </p>
    </div>
  )
}

export default LanguageCard
