import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { Hero } from "./sections/Hero"
import ShowCase from "./sections/ShowCase"
import TechStack from "./sections/TechStack"


const App = () => {
  return (
   <>
   <NavBar />
   <Hero/>
   <ShowCase/>
   <TechStack/>
   <Contact />
   <Footer/>
   </>
  )
}

export default App