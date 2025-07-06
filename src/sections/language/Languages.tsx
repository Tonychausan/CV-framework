import React from "react"
import { useSelector } from "react-redux"
import { Info } from "lucide-react"

import type { RootState } from "../../store/store"

import LanguageCard from "./LanguageCard"

export const Languages: React.FC = () => {
  const { languages, loading, error } = useSelector(
    (state: RootState) => state.content,
  )

  if (loading) return <p className="text-white">Loading languages...</p>
  if (error) return <p className="text-red-400">Error: {error}</p>

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold text-white">Languages</h2>
        <div className="relative group">
          <Info className="w-5 h-5 text-white cursor-pointer" />
          <div className="absolute z-10 left-6 top-0 w-64 bg-gray-900 text-gray-200 text-sm p-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <p className="mb-1">1–3: Basic understanding</p>
            <p className="mb-1">4–6: Intermediate conversational</p>
            <p className="mb-1">7–9: Advanced or professional</p>
            <p>10: Native or near-native</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {languages?.map((lang, idx) => (
          <LanguageCard key={idx} language={lang} />
        ))}
      </div>
    </section>
  )
}
