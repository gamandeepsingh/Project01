import Reservation  from "../components/Resrvation.jsx"
import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from "../components/Qualities"
import Team from "../components/Team"
import WhoAreWe from "../components/WhoAreWe"
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
