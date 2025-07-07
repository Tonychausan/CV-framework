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
    <div className="text-white">
      <h1 className="text-7xl font-bold mb-4">Tony Chau</h1>
      <h2 className="text-2xl font-semibold mb-4">{aboutMe?.role}</h2>
      <p className="leading-relaxed mb-4">{aboutMe?.description}</p>
    </div>
  )
}

export default AboutMe
