import React from "react"

import type { EducationItem } from "../../types.ts"
import Card from "../../components/Card.tsx"

interface EducationCardProps {
  education: EducationItem
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Card className="mb-6">
      <h3 className="text-xl font-semibold text-white">{education.name}</h3>
      <p className="text-sm text-red-300 font-medium">{education.education}</p>
      <p className="text-sm text-gray-400 mb-2">
        {education.fromTime} – {education.toTime}
      </p>
      <p className="text-sm text-gray-200 leading-relaxed">
        {education.description}
      </p>
    </Card>
  )
}

export default EducationCard
