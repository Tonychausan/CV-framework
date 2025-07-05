import React from "react"
import { useSelector } from "react-redux"

import type { RootState } from "../../store/store.ts"

const AboutMe: React.FC = () => {
  const { aboutMe, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="text-white text-center">
      <p className="text-sm leading-relaxed">{aboutMe?.description}</p>
    </div>
  )
}

export default AboutMe
