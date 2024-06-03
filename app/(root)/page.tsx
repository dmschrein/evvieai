export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Slider from '@/components/home/Slider'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      
    </>
  )
}