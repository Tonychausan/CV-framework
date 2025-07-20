import React, { useState } from "react"
import { motion } from "framer-motion"

import { CONTENT_BASE } from "../../constants.ts"
import Contacts from "../contact/Contact.tsx"

import DownloadCVButton from "./DownloadCVButton .tsx"
import AboutMe from "./AboutMe.tsx"

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div
      className="w-full relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${CONTENT_BASE}background_picture.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-800 opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-20 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <AboutMe />
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="flex sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-200 text-amber-950 px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Contacts
              </button>
              <DownloadCVButton />
            </motion.div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start mt-4">
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

      {showModal && <Contacts onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Header
