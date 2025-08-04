import StatisticsHero from "@/components/statistics-hero"
import StatisticsOverview from "@/components/statistics-overview"
import StatisticsDepartmentwise from "@/components/statistics-departmentwise"
import StatisticsBatchwise from "@/components/statistics-batchwise"
import StatisticsDetailedTable from "@/components/statistics-detailed-table"
import StatisticsDepartmentTable from "@/components/statistics-department-table"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Placement Statistics 2024-25 | IIITDM Kancheepuram",
  description: "Comprehensive placement statistics for IIITDM Kancheepuram for the academic year 2024-25",
}

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <StatisticsHero />
        <StatisticsOverview />
        <StatisticsDepartmentTable />
        <StatisticsDepartmentwise />
        <StatisticsBatchwise />
        {/* <StatisticsDetailedTable /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
