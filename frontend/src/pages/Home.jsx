import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Newsletter from "../components/Newsletter"
import OurPolicy from "../components/OurPolicy"

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellers/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
