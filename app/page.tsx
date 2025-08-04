import Navbar from "@/components/navbar"
import LatestUpdatesBanner from "@/components/latest-updates-banner"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import DirectorsMessage from "@/components/directors-message"
import StatisticsSection from "@/components/statistics-section"
import StudentTestimonials from "@/components/student-testimonials"
import NotificationsSection from "@/components/notifications-section"
import RecruitersSection from "@/components/recruiters-section"
import QuickAccess from "@/components/quick-access"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import PlacementInitiatives from "@/components/placement-initiatives"



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LatestUpdatesBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DirectorsMessage />
        <StatisticsSection />
        {/* <StudentTestimonials /> */}
        <NotificationsSection />
        {/* <RecruitersSection /> */}
        <PlacementInitiatives />
        <QuickAccess />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

