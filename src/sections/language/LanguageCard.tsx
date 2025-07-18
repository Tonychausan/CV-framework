import React, { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

import type { LanguageItem } from "../../types"
import Card from "../../components/Card"

interface Props {
  language: LanguageItem
}

const LanguageCard: React.FC<Props> = ({ language }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [startBarAnimation, setStartBarAnimation] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStartBarAnimation(true), 600)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-white">
          {language.language}
        </h3>
        <div className="w-full h-3 bg-gray-600 rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: startBarAnimation ? `${(language.level / 10) * 100}%` : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-red-300 rounded"
          />
        </div>
        <p className="text-sm text-gray-400">
          Proficiency: {language.level} / 10
        </p>
      </Card>
    </div>
  )
}

export default LanguageCard
