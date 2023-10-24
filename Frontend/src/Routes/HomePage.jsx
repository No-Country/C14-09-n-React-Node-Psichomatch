import Header from '../Components/Header'
import Hero from '../components/Hero' 
import { FeaturesCard } from '../Components/FeaturesCard'
import { TeamCard } from '../Components/TeamCard'
import Footer from '../Layouts/Footer'

const HomePage = function () {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesCard />
      <TeamCard />
      <Footer />
    </>
  )
}

export default HomePage;
