import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamHero from "@/components/our-teams/team-hero"
import TeamLeadership from "@/components/our-teams/team-leadership"
import TeamFacultyAdvisors from "@/components/our-teams/team-faculty-advisors"
import TeamPlacementOffice from "@/components/our-teams/team-placement-office"
import TeamStudentCoordinators from "@/components/our-teams/team-student-coordinators"
import ScrollToTop from "@/components/scroll-to-top"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <TeamHero />
        <TeamLeadership />
        <TeamFacultyAdvisors />
        <TeamPlacementOffice />
        <TeamStudentCoordinators />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

