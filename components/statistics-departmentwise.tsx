"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { prepareChartData, statistics } from "@/data/placement-data-2024-25"

const StatisticsDepartmentwise = () => {
  const { departmentData, topCompaniesData } = prepareChartData()

  return (    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Department-wise Statistics 2024-25</h2>

        <Tabs defaultValue="distribution" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="distribution">Department Distribution</TabsTrigger>
            <TabsTrigger value="companies">Top Companies</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Department-wise Placement Distribution</CardTitle>
                <CardDescription>Number of offers by department for 2024-25</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <BarChart
                    data={departmentData.map((item) => ({
                      department: item.department,
                      count: item.offers,
                    }))}
                    index="department"
                    categories={["count"]}
                    colors={["#2563eb"]}
                    valueFormatter={(value) => `${value} offers`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Top Recruiting Companies</CardTitle>
                <CardDescription>Companies with the most offers in 2024-25</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <BarChart
                    data={statistics.topCompanies.map((item) => ({
                      company: item.company,
                      count: item.count,
                    }))}
                    index="company"
                    categories={["count"]}
                    colors={["#4ade80"]}
                    valueFormatter={(value) => `${value} offers`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Average Salary by Department</CardTitle>
              <CardDescription>Average CTC offered to different departments in 2024-25 (in LPA)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <BarChart
                  data={departmentData}
                  index="department"
                  categories={["avgCTC"]}
                  colors={["#f59e0b"]}
                  valueFormatter={(value) => `₹${value.toFixed(2)} LPA`}
                  className="h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default StatisticsDepartmentwise
