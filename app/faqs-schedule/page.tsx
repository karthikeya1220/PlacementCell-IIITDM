import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQsHero from "@/components/for-students/faqs-hero"
import FAQsSchedule from "@/components/for-students/faqs-schedule"
import FAQsAccordion from "@/components/for-students/faqs-accordion"
import FAQsContact from "@/components/for-students/faqs-contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function FAQsSchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <FAQsHero />
        <FAQsSchedule />
        <FAQsAccordion />
        <FAQsContact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

