import React from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"
import { MdEmail, MdPhone } from "react-icons/md"

import type { RootState } from "../../store/store.ts"
import type { ContactData } from "../../types.ts"

import SocialMediaIcon from "./SocialMediaIcon.tsx"

interface ContactsProps {
  onClose: () => void
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.2 } },
}

const Contacts: React.FC<ContactsProps> = ({ onClose }) => {
  const { contact } = useSelector((state: RootState) => state.content)

  if (!contact) return null

  const { email, phone, facebook, instagram, linkedin } = contact as ContactData

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div
          className="bg-stone-800 text-black rounded-lg p-6 relative w-full max-w-md shadow-lg border border-stone-600"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <div className="space-y-3 mb-6">
            {email && (
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                  <MdEmail size={18} />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="underline break-all text-white"
                >
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                  <MdPhone size={18} />
                </div>
                <div className="text-white">{phone}</div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {linkedin && (
              <SocialMediaIcon
                href={linkedin}
                hoverBgColor="bg-blue-100"
                hoverTextColor="text-blue-600"
              >
                <SiLinkedin size={20} />
              </SocialMediaIcon>
            )}
            {instagram && (
              <SocialMediaIcon
                href={instagram}
                hoverBgColor="bg-pink-100"
                hoverTextColor="text-pink-500"
              >
                <SiInstagram size={20} />
              </SocialMediaIcon>
            )}
            {facebook && (
              <SocialMediaIcon
                href={facebook}
                hoverBgColor="bg-blue-100"
                hoverTextColor="text-blue-800"
              >
                <SiFacebook size={20} />
              </SocialMediaIcon>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Contacts
