import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Screenshots from "@/components/screenshots"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Faq from "@/components/faq"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
