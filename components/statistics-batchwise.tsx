"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, BarChart } from "@/components/ui/chart"
import { prepareChartData, statistics } from "@/data/placement-data-2024-25"

const StatisticsBatchwise = () => {
  const { programData, salaryRangeData } = prepareChartData()

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Course-wise Statistics 2024-25</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Program-wise Distribution</CardTitle>
              <CardDescription>Placement distribution by program in 2024-25</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full h-80">
                <PieChart
                  data={programData}
                  index="name"
                  categories={["value"]}
                  valueFormatter={(value) => `${value} students`}
                  colors={["#2563eb", "#4ade80", "#f59e0b"]}
                  className="h-80"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Salary Range Distribution</CardTitle>
              <CardDescription>Number of offers by salary range in 2024-25</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart
                  data={Object.entries(statistics.salaryRanges).map(([range, count]) => ({
                    range,
                    count,
                  }))}
                  index="range"
                  categories={["count"]}
                  colors={["#ec4899"]}
                  valueFormatter={(value) => `${value} offers`}
                  className="h-80"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Average CTC by Program</CardTitle>
            <CardDescription>Average CTC offered to different programs in 2024-25 (in LPA)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <BarChart
                data={programData.map((item) => ({
                  program: item.name,
                  avgCTC: item.ctc,
                }))}
                index="program"
                categories={["avgCTC"]}
                colors={["#2563eb"]}
                valueFormatter={(value) => `₹${value.toFixed(2)} LPA`}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default StatisticsBatchwise
