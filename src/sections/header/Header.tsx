import React from "react"
import { useSelector } from "react-redux"

import { CONTENT_BASE } from "../../constants.ts"
import type { RootState } from "../../store/store.ts"
import AboutMe from "../aboutme/AboutMe.tsx"

const Header: React.FC = () => {
  const { loading, error } = useSelector((state: RootState) => state.content)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="text-white w-screen min-h-screen bg-amber-950 flex items-center justify-center lg:px-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-20 max-w-[1600px] w-full items-center">
        {/* About Me Text Section */}
        <div className="order-2 lg:order-1">
          <AboutMe />
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-start items-center">
          <img
            src={`${CONTENT_BASE}profile_picture.png`}
            alt="Profile"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-auto aspect-square rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
