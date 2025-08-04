"use client"
import { motion } from "framer-motion"
import { placementStatistics, sectorDistribution, departmentWisePlacement } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const COLORS = ["#0A2463", "#4DA8DA", "#007EA7", "#003459", "#00171F"]

export default function PlacementTrackRecord() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            Placements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Placement Track Record</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            IIITDM Kancheepuram has consistently achieved excellent placement results, with our students being recruited
            by leading companies across various sectors.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sectors">Sector Distribution</TabsTrigger>
            <TabsTrigger value="departments">Department-wise</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0A2463] mb-6">Placement Trends (2020-2024)</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={placementStatistics} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="averagePackage"
                      name="Average Package (LPA)"
                      stroke="#0A2463"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="highestPackage"
                      name="Highest Package (LPA)"
                      stroke="#4DA8DA"
                      strokeWidth={2}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="placementPercentage"
                      name="Placement Percentage"
                      stroke="#007EA7"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="border-[#4DA8DA]/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Average Package</h4>
                    <p className="text-3xl font-bold text-[#4DA8DA]">12 LPA</p>
                    <p className="text-sm text-gray-500 mt-1">2024 Batch</p>
                    <p className="text-xs text-green-600 mt-2">↑ 9.1% from previous year</p>
                  </CardContent>
                </Card>
                <Card className="border-[#4DA8DA]/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Highest Package</h4>
                    <p className="text-3xl font-bold text-[#4DA8DA]">32 LPA</p>
                    <p className="text-sm text-gray-500 mt-1">2024 Batch</p>
                    <p className="text-xs text-green-600 mt-2">↑ 6.7% from previous year</p>
                  </CardContent>
                </Card>
                <Card className="border-[#4DA8DA]/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Placement Rate</h4>
                    <p className="text-3xl font-bold text-[#4DA8DA]">95%</p>
                    <p className="text-sm text-gray-500 mt-1">2024 Batch</p>
                    <p className="text-xs text-green-600 mt-2">↑ 3.3% from previous year</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="sectors">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0A2463] mb-6">Sector-wise Placement Distribution (2024)</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {sectorDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2463] mb-4">Key Insights</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#0A2463] mr-3 mt-0.5"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">IT/Software (45%):</span> Leading tech companies like Microsoft,
                          Amazon, and VISA continue to be major recruiters.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#4DA8DA] mr-3 mt-0.5"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Core Engineering (25%):</span> Companies like Intel, Qualcomm,
                          and Global Foundries recruit for hardware and design roles.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#007EA7] mr-3 mt-0.5"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Analytics (15%):</span> Growing demand for data scientists and
                          analysts from both tech and non-tech sectors.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#003459] mr-3 mt-0.5"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Finance (10%):</span> Fintech companies and financial
                          institutions recruiting for technology roles.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#00171F] mr-3 mt-0.5"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Others (5%):</span> Includes consulting, education technology,
                          healthcare technology, and more.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="departments">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0A2463] mb-6">Department-wise Placement Percentage (2024)</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentWisePlacement} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="department" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar
                      dataKey="percentage"
                      name="Placement Percentage"
                      fill="#0A2463"
                      radius={[4, 4, 0, 0]}
                      label={{ position: "top", formatter: (value) => `${value}%` }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-[#4DA8DA]/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-4">Top Recruiting Companies</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Computer Science & Engineering</span>
                        <Badge className="bg-[#0A2463]">Microsoft, Amazon, VISA</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Electronics & Communication</span>
                        <Badge className="bg-[#0A2463]">Intel, Qualcomm, AMD</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Mechanical Engineering</span>
                        <Badge className="bg-[#0A2463]">Siemens, L&T, Tata</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Smart Manufacturing</span>
                        <Badge className="bg-[#0A2463]">Bosch, GE, Honeywell</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#4DA8DA]/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-4">Salary Trends by Department</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-700">CSE</span>
                          <span className="text-gray-700 font-medium">14.5 LPA</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0A2463] h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-700">ECE</span>
                          <span className="text-gray-700 font-medium">13.2 LPA</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0A2463] h-2 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-700">ME</span>
                          <span className="text-gray-700 font-medium">10.8 LPA</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0A2463] h-2 rounded-full" style={{ width: "67%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-700">Smart Manufacturing</span>
                          <span className="text-gray-700 font-medium">11.5 LPA</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0A2463] h-2 rounded-full" style={{ width: "71%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Top Recruiters</h3>
              <p className="mb-6 text-gray-200">
                Our students are recruited by leading companies across various sectors, including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Microsoft</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Amazon</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">VISA</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Intel</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Qualcomm</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">AMD</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Accenture</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="font-semibold">Global Foundries</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Alumni Success</h3>
              <p className="mb-6 text-gray-200">
                Our alumni have established successful careers in leading organizations worldwide, with many advancing
                to leadership positions within a few years of graduation.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="italic text-gray-200">
                    "The strong foundation I received at IIITDM helped me excel in my role at Microsoft. The
                    interdisciplinary approach to problem-solving has been particularly valuable."
                  </p>
                  <p className="text-[#4DA8DA] mt-2">- Priya S., Software Engineer, Microsoft (2019 Graduate)</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="italic text-gray-200">
                    "The practical exposure and industry-relevant projects at IIITDM gave me a competitive edge when I
                    joined Intel. I was able to contribute meaningfully from day one."
                  </p>
                  <p className="text-[#4DA8DA] mt-2">- Rahul K., Hardware Engineer, Intel (2020 Graduate)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
