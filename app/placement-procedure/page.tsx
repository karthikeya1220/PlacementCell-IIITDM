import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PlacementProcedureHero from "@/components/placement-procedure-hero"
import PlacementProcedureTimeline from "@/components/placement-procedure-timeline"
import PlacementProcedureFAQ from "@/components/placement-procedure-faq"
import ScrollToTop from "@/components/scroll-to-top"

export default function PlacementProcedurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PlacementProcedureHero />
        <PlacementProcedureTimeline />
        <PlacementProcedureFAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

