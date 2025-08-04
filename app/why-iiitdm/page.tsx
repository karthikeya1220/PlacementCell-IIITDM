import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

import WhyIIITDMHero from "@/components/for-recruiters/why-iiitdm-hero"
import InstituteOverview from "@/components/for-recruiters/institute-overview"
import AcademicExcellence from "@/components/for-recruiters/academic-excellence"
import Infrastructure from "@/components/for-recruiters/infrastructure"
import StudentQuality from "@/components/for-recruiters/student-quality"
import IndustryConnections from "@/components/for-recruiters/industry-connections"
import PlacementTrackRecord from "@/components/for-recruiters/placement-track-record"
import SkillDevelopment from "@/components/for-recruiters/skill-development"
import RecruitmentProcess from "@/components/for-recruiters/recruitment-process"
import Testimonials from "@/components/for-recruiters/testimonials"
import FAQ from "@/components/for-recruiters/faq"

export const metadata = {
  title: "Why IIITDM? | IIITDM Kancheepuram Placements",
  description:
    "Discover why IIITDM Kancheepuram is the perfect choice for your recruitment needs. Learn about our academic excellence, student quality, and placement track record.",
}

export default function WhyIIITDMPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <WhyIIITDMHero />        <InstituteOverview />
        <AcademicExcellence />
        <Infrastructure />
        <StudentQuality />
        <IndustryConnections />
        <PlacementTrackRecord />
        <SkillDevelopment />
        {/* <RecruitmentProcess /> */}
        {/* <Testimonials /> */}
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

