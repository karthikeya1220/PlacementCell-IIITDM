"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, BarChart } from "@/components/ui/chart"
import { placementData2024_25, statistics, prepareChartData } from "@/data/placement-data-2024-25"

const StatisticsOverview = () => {
  const { genderData } = prepareChartData()

  const normalizeOfferTypes = () => {
    // Create a map to normalize and group similar offer types
    const offerTypeMap: Record<string, number> = {}

    placementData2024_25.forEach((entry) => {
      let normalizedType = entry.offerType.toLowerCase().trim()

      // Normalize Full Time variations
      if (normalizedType.includes("full time") || normalizedType === "full time offer") {
        normalizedType = "Full Time"
      }
      // Normalize Intern variations
      else if (normalizedType === "intern" || normalizedType === "internship") {
        normalizedType = "Internship"
      }
      // Normalize Intern cum PPO
      else if (normalizedType.includes("intern cum ppo")) {
        normalizedType = "Intern cum PPO"
      }

      if (!offerTypeMap[normalizedType]) {
        offerTypeMap[normalizedType] = 0
      }
      offerTypeMap[normalizedType]++
    })

    return Object.entries(offerTypeMap).map(([name, value]) => ({
      name,
      value,
    }))
  }

  const normalizedOfferTypeData = normalizeOfferTypes()

  // Format salary values with null check
  const formatSalary = (value: number | undefined) => {
    // Return a default value if undefined
    if (value === undefined || value === null) {
      return "₹0.00 L"
    }

    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`
    } else {
      return `₹${value.toLocaleString()}`
    }
  }

  // Year comparison data (with 2024-25 data from our statistics)
  const yearComparisonData = [
    { year: "2022-23", offers: 145, avgCTC: 8.5, maxCTC: 25.0 },
    { year: "2023-24", offers: 165, avgCTC: 9.2, maxCTC: 28.5 },
    {
      year: "2024-25",
      offers: statistics.totalOffers,
      avgCTC: 9.46, // Hardcoded average CTC
      maxCTC: 31.64, // Hardcoded highest CTC
    },
  ]

  return (    <section id="overview" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Placement Overview 2024-25</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Total Offers</CardTitle>
              <CardDescription>Academic Year 2024-25</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">{statistics.totalOffers}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Unique Placements</CardTitle>
              <CardDescription>Students placed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">149</p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Highest CTC</CardTitle>
              <CardDescription>Maximum package offered</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">₹31.64 L</p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Average CTC</CardTitle>
              <CardDescription>Average package offered</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">₹9.46 L</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="offers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="offers">Offer Types</TabsTrigger>
            <TabsTrigger value="gender">Gender Distribution</TabsTrigger>
            <TabsTrigger value="yearly">Yearly Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="offers" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Offer Type Distribution</CardTitle>
                <CardDescription>Breakdown of different types of offers received in 2024-25</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-md h-80">
                  <PieChart
                    data={normalizedOfferTypeData}
                    index="name"
                    categories={["value"]}
                    valueFormatter={(value) => `${value} offers`}
                    colors={["#2563eb", "#4ade80", "#f59e0b"]}
                    className="h-80"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gender" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Male vs Female placement statistics for 2024-25</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-md h-80">
                  <PieChart
                    data={genderData}
                    index="name"
                    categories={["value"]}
                    valueFormatter={(value) => `${value} students`}
                    colors={["#3b82f6", "#ec4899"]}
                    className="h-80"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yearly" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Year-on-Year Comparison</CardTitle>
                <CardDescription>Placement trends over the last three years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <BarChart
                    data={yearComparisonData}
                    index="year"
                    categories={["offers", "avgCTC", "maxCTC"]}
                    colors={["#2563eb", "#10b981", "#f59e0b"]}
                    valueFormatter={(value) => {
                      if (typeof value === 'number') {
                        return value.toFixed(2) + ' LPA'
                      }
                      return value.toString()
                    }}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default StatisticsOverview
