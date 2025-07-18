import React from "react"
import { useSelector } from "react-redux"
import { Info } from "lucide-react"

import type { RootState } from "../../store/store"
import { SECTION_TITLES } from "../../constants.ts"

import LanguageCard from "./LanguageCard"

export const Languages: React.FC = () => {
  const { languages } = useSelector((state: RootState) => state.content)

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold">{SECTION_TITLES.languages}</h2>
        <div className="relative group">
          <Info className="w-5 h-5 text-red-400 cursor-pointer" />
          <div
            className="
        absolute left-1/2 top-full mt-2 -translate-x-1/2 border
        w-64 p-3 rounded shadow-lg text-sm text-gray-200 bg-stone-900
        opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10
      "
          >
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

export default Languages
