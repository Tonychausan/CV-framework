import './App.css'
import Experiences from "./sections/experiences/Experiences.tsx";
import AboutMe from "./sections/aboutme/AboutMe.tsx";
import Educations from "./sections/education/Educations.tsx";

function App() {

    return (
        <div className="flex flex-col md:flex-row md:h-screen">
            <div className="w-full h-screen md:h-auto md:w-1/3  p-4 overflow-visible">
                <AboutMe/>
            </div>
            <div className="w-full md:w-2/3 p-4 overflow-y-auto">
                <Experiences/>
                <Educations/>
            </div>
        </div>
    )
}

export default App
