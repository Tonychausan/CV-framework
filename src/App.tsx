import "./App.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Experiences from "./sections/experiences/Experiences.tsx"
import AboutMe from "./sections/aboutme/AboutMe.tsx"
import Educations from "./sections/education/Educations.tsx"
import Header from "./sections/header/Header.tsx"
import { fetchAllContent } from "./store/contentSlice.ts"
import type { AppDispatch, RootState } from "./store/store.ts"
import Loading from "./sections/Loading.tsx"

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.content)

  useEffect(() => {
    dispatch(fetchAllContent())
  }, [dispatch])

  if (loading || error) {
    return <Loading error={error} />
  }

  return (
    <div className="h-screen bg-amber-950">
      <div className="w-full h-screen p-4">
        <Header />
        <AboutMe />
      </div>
      <div className="w-full p-4 overflow-y-auto">
        <Experiences />
        <Educations />
      </div>
    </div>
  )
}

export default App
