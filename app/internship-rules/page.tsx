import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InternshipRulesHero from "@/components/for-students/internship-rules-hero"
import InternshipRulesContent from "@/components/for-students/internship-rules-content"
import InternshipRulesAcknowledgement from "@/components/for-students/internship-rules-acknowledgement"
import ScrollToTop from "@/components/scroll-to-top"

export default function InternshipRulesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <InternshipRulesHero />
        <InternshipRulesContent />
        <InternshipRulesAcknowledgement />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

