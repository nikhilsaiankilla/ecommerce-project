import React from 'react'
import HeroSection from '../../sections/heroSection/HeroSection'
import DiscoverSection from '../../sections/discoverSection/DiscoverSection'
import AboutSection from '../../sections/aboutSection/AboutSection'
import PopularCollection from '../../sections/popularCollection/PopularCollection'
import MoreProductsSection from '../../sections/MoreProductsSection/MoreProductsSection'
const Home = () => {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <AboutSection />
      <PopularCollection />
      <MoreProductsSection />
    </>
  )
}

export default Home