import React, { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

import { CONTENT_BASE } from "../../constants.ts"
import type { RootState } from "../../store/store.ts"
import AboutMe from "../aboutme/AboutMe.tsx"
import Contacts from "../../components/Contact.tsx"
import DownloadCVButton from "../../components/DownloadCVButton .tsx"

const Header: React.FC = () => {
  const { loading, error } = useSelector((state: RootState) => state.content)
  const [showModal, setShowModal] = useState(false)

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>
  if (error)
    return <p className="text-center mt-10 text-red-400">Error: {error}</p>

  return (
    <div className="w-full text-white bg-amber-950 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <AboutMe />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-amber-950 px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Contacts
              </button>
              <DownloadCVButton />
            </motion.div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={`${CONTENT_BASE}profile_picture.png`}
                alt="Profile"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-auto aspect-square rounded-full shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Contacts onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Header
