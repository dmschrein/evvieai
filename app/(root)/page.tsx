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
import Problem from '@/components/home/Problem'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      <Slider />
    </>
  )
}