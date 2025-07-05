import React from "react"

import { CONTENT_BASE } from "../constants.ts"

type LoadingProps = {
  error?: string | null
}

const Loading: React.FC<LoadingProps> = ({ error }) => {
  const hasError = Boolean(error)

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
      <div className="relative inline-block w-44 h-44 md:w-60 md:h-60">
        {/* Spinner only if no error */}
        {!hasError && (
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-white animate-spin"></div>
        )}

        {/* Profile image */}
        <img
          src={`${CONTENT_BASE}profile_picture.png`}
          alt="Profile"
          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full shadow-lg object-cover"
        />
      </div>

      <h1 className="mt-6 text-xl font-semibold">
        {hasError ? "Could not load page" : "Loading..."}
      </h1>
    </div>
  )
}

export default Loading
