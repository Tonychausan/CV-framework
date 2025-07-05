import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

import type { ExperienceItem } from "../../types.ts"

interface ExperienceCardProps {
  experience: ExperienceItem
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-4 bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center p-4 text-left text-white focus:outline-none"
      >
        <div>
          <h3 className="text-lg font-semibold">{experience.workTitle}</h3>
          <p className="text-sm text-gray-300">{experience.workplace}</p>
          <p className="text-sm text-gray-400">
            {experience.fromTime} – {experience.toTime}
          </p>
        </div>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          } text-gray-400`}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-4 text-sm text-gray-200 leading-relaxed">
          {experience.description}
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
