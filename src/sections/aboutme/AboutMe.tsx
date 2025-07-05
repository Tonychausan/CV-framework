import React, { useEffect, useState } from "react"

import { CONTENT_BASE } from "../../constants.ts"
import type { AboutMeData } from "../../types.ts"

const AboutMe: React.FC = () => {
  const [data, setData] = useState<AboutMeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${CONTENT_BASE}aboutme.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load aboutme.json")
        return res.json()
      })
      .then((json: AboutMeData) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-white">Loading...</p>
  if (error) return <p className="text-red-400">Error: {error}</p>

  return (
    <div className="text-white text-center">
      <p className="text-sm leading-relaxed">{data?.description}</p>
    </div>
  )
}

export default AboutMe
