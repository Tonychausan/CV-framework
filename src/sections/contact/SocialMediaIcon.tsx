// components/common/SocialMediaIcon.tsx
import React from "react"

interface SocialMediaIconProps {
  href: string
  children: React.ReactNode
  hoverBgColor: string
  hoverTextColor: string
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  href,
  children,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`border w-10 h-10 flex items-center justify-center rounded-full text-white text-gray-600 transition hover:${hoverBgColor} hover:${hoverTextColor}`}
    >
      {children}
    </a>
  )
}

export default SocialMediaIcon
