import React from "react"
import { useSelector } from "react-redux"

import type { ExperienceItem } from "../../types.ts"
import type { RootState } from "../../store/store.ts"
import { SECTION_TITLES } from "../../constants.ts"

import ExperienceCard from "./ExperienceCard.tsx"

const Experiences: React.FC = () => {
  const { experiences, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">
        {SECTION_TITLES.experiences}
      </h2>
      {experiences.map((exp: ExperienceItem, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  )
}

export default Experiences
