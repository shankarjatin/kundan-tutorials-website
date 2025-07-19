import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SubjectsSection from "@/components/subjects-section"
import FeaturesSection from "@/components/features-section"
import TrustBadges from "@/components/trust-badges"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBadges />
        <AboutSection />
        <SubjectsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        {/* <CtaSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
