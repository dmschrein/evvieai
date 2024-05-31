import Slider from "@/components/home/Slider";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Guide from "@/components/home/Guide";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Guide />
      <Features />
      <CTA />
    </>
  )
}
