// components/DownloadCVButton.tsx
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { pdf } from "@react-pdf/renderer"

import type { RootState } from "../store/store"
import { NAME } from "../constants"

import PDFDocument from "./PDFDocument"

const DownloadCVButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const content = useSelector((state: RootState) => state.content)

  const handleDownload = async () => {
    setLoading(true)
    try {
      const blob = await pdf(<PDFDocument {...content} />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${NAME}-cv.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="bg-white text-amber-950 px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 transition"
      disabled={loading}
    >
      {loading ? "Generating..." : "Download CV"}
    </button>
  )
}

export default DownloadCVButton
