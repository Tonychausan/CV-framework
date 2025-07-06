import "./App.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Experiences from "./sections/experiences/Experiences.tsx"
import Educations from "./sections/education/Educations.tsx"
import Header from "./sections/header/Header.tsx"
import { fetchAllContent } from "./store/contentSlice.ts"
import type { AppDispatch } from "./store/store.ts"
import { Languages } from "./sections/language/Languages.tsx"

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllContent())
  }, [dispatch])

  return (
    <div className="h-screen">
      <Header />
      <div className="px-4 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Experiences />
        <div>
          <Educations />
          <Languages />
        </div>
      </div>
    </div>
  )
}

export default App
