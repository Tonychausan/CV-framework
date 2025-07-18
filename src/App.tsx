import "./App.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"

import { fetchAllContent } from "./store/contentSlice.ts"
import type { AppDispatch, RootState } from "./store/store.ts"
import Header from "./sections/header/Header.tsx"
import Educations from "./sections/education/Educations.tsx"
import Experiences from "./sections/experiences/Experiences.tsx"
import Languages from "./sections/language/Languages.tsx"
import Loading from "./sections/Loading.tsx"

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.content)

  const [minimumDelayReached, setMinimumDelayReached] = useState(false)

  useEffect(() => {
    dispatch(fetchAllContent())

    const timer = setTimeout(() => {
      setMinimumDelayReached(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [dispatch])

  const isStillLoading = loading || !minimumDelayReached

  return (
    <AnimatePresence mode="wait">
      {isStillLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen flex items-center justify-center"
        >
          <Loading error={error} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <div className="shadow-xl">
            <Header />
          </div>
          <div className="mt-4 px-4 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">
            <div className="lg:col-span-7 lg:order-1">
              <Experiences />
            </div>
            <div className="lg:col-span-3">
              <Educations />
              <Languages />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
