import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PlacementRulesHero from "@/components/for-students/placement-rules-hero"
import PlacementRulesContent from "@/components/for-students/placement-rules-content"
import PlacementRulesAcknowledgement from "@/components/for-students/placement-rules-acknowledgement"
import ScrollToTop from "@/components/scroll-to-top"

export default function PlacementRulesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PlacementRulesHero />
        <PlacementRulesContent />
        <PlacementRulesAcknowledgement />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

