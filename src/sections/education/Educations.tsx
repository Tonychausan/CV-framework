import React from "react"
import { useSelector } from "react-redux"

import type { RootState } from "../../store/store.ts"
import type { EducationItem } from "../../types.ts"
import { SECTION_TITLES } from "../../constants.ts"

import EductionCard from "./EductionCard.tsx"

const Educations: React.FC = () => {
  const { educations, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">
        {SECTION_TITLES.educations}
      </h2>
      {educations.map((exp: EducationItem, index) => (
        <EductionCard key={index} education={exp} />
      ))}
    </section>
  )
}

export default Educations
