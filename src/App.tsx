import "./App.css"
import Experiences from "./sections/experiences/Experiences.tsx"
import AboutMe from "./sections/aboutme/AboutMe.tsx"
import Educations from "./sections/education/Educations.tsx"
import Header from "./sections/header/Header.tsx"

function App() {
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
