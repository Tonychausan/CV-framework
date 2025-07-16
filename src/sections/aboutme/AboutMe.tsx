import React from "react"
import { useSelector } from "react-redux"
import { Typewriter } from "react-simple-typewriter"

import type { RootState } from "../../store/store.ts"
import { NAME } from "../../constants.ts"

const AboutMe: React.FC = () => {
  const { aboutMe, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="text-white">
      <h1 className="lg:text-7xl text-4xl font-bold mb-4 flex justify-center lg:justify-start">
        <Typewriter words={[NAME]} cursor={false} typeSpeed={80} />
      </h1>
      <h2 className="lg:text-2xl text-xl font-semibold mb-4 flex justify-center lg:justify-start">
        <Typewriter
          words={[aboutMe?.role || ""]}
          cursor={false}
          typeSpeed={80}
        />
      </h2>
      <p className="leading-relaxed mb-4 text-justify">
        <Typewriter
          words={[aboutMe?.description || ""]}
          cursor={false}
          cursorStyle="|"
          typeSpeed={1}
        />
      </p>
    </div>
  )
}

export default AboutMe
