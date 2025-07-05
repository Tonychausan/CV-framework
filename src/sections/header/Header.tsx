import React from "react"
import { useSelector } from "react-redux"

import { CONTENT_BASE } from "../../constants.ts"
import type { RootState } from "../../store/store.ts"

const Header: React.FC = () => {
  const { aboutMe, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="text-white text-center">
      <img
        src={`${CONTENT_BASE}profile_picture.png`}
        alt="Profile"
        className="w-75 h-75 md:w-100 md:h-100 rounded-full mx-auto mb-4 shadow-lg object-cover"
      />
      <h1 className="text-xl font-bold mb-4">{aboutMe?.name}</h1>
      <h2 className="text-xl font-bold mb-4">{aboutMe?.role}</h2>

      <a
        href={`mailto:${aboutMe?.email}`}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white hover:bg-gray-100 transition mb-2"
        aria-label="Email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v16H4z" fill="none" />
          <polyline points="4,4 12,13 20,4" />
        </svg>
      </a>
    </div>
  )
}

export default Header
