"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  Building,
  Briefcase,
  Users,
  CheckCircle,
  X,
  ChevronRight,
  ChevronLeft,
  PieChart,
  GraduationCap,
  Award,
  Info,
} from "lucide-react"
import Image from "next/image"
import { placementScheduleData, offerTypeData, salaryRangeData } from "./placement-schedule-data"
import { cn } from "@/lib/utils"

export default function FAQsSchedule() {
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null)
  const [activeTab, setActiveTab] = useState("timeline")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleCompanyClick = (company: any) => {
    setSelectedCompany(company)
  }

  const nextMonth = () => {
    setSelectedMonth((prev) => (prev === placementScheduleData.length - 1 ? 0 : prev + 1))
  }

  const prevMonth = () => {
    setSelectedMonth((prev) => (prev === 0 ? placementScheduleData.length - 1 : prev - 1))
  }

  return (    <section id="schedule" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Placement Schedule 2024-25</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            IIITDM Kancheepuram follows a structured placement process throughout the academic year, with different
            phases for internships and full-time placements.
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <Tabs defaultValue="timeline" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="timeline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Timeline</span>
                </TabsTrigger>
                <TabsTrigger value="statistics" className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  <span className="hidden sm:inline">Statistics</span>
                </TabsTrigger>
                <TabsTrigger value="departments" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Departments</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="timeline" className="focus-visible:outline-none focus-visible:ring-0">
              {/* Monthly Timeline View */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div
                  className={cn(
                    "bg-gradient-to-r p-6 text-white",
                    placementScheduleData[selectedMonth].highlight
                      ? "from-[#0A2463] to-[#1E3A8A]"
                      : "from-[#4DA8DA] to-[#0A2463]",
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{placementScheduleData[selectedMonth].name}</h3>
                      <p className="text-blue-100 mt-1 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {placementScheduleData[selectedMonth].period}
                      </p>
                    </div>

                    <div className="flex items-center mt-4 md:mt-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 mr-2"
                        onClick={prevMonth}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous month</span>
                      </Button>
                      <div className="text-sm px-3 py-1 bg-white/10 rounded-md">
                        {selectedMonth + 1} / {placementScheduleData.length}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 ml-2"
                        onClick={nextMonth}
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next month</span>
                      </Button>
                    </div>
                  </div>

                  <p className="mt-4 text-blue-50">{placementScheduleData[selectedMonth].description}</p>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedMonth}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {placementScheduleData[selectedMonth].companies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {placementScheduleData[selectedMonth].companies.map((company, index) => (
                            <Card
                              key={index}
                              className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-gray-200"
                              onClick={() => handleCompanyClick(company)}
                            >
                              <CardContent className="p-0">
                                <div className="p-4 flex items-center gap-4">
                                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                                    {company.logo ? (
                                      <Image
                                        src={company.logo || "/placeholder.svg"}
                                        alt={company.name}
                                        fill
                                        className="object-cover"
                                      />
                                    ) : (
                                      <Building className="h-6 w-6 text-gray-400" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-[#0A2463]">{company.name}</h3>
                                      <Badge
                                        className={cn(
                                          company.offerType === "Full Time"
                                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                                            : company.offerType === "Intern cum PPO"
                                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                              : "bg-amber-100 text-amber-800 hover:bg-amber-100",
                                        )}
                                      >
                                        {company.offerType}
                                      </Badge>
                                    </div>
                                    <div className="mt-1 space-y-1">
                                      {company.ctc && (
                                        <p className="text-sm text-gray-600 flex items-center">
                                          <Award className="h-3.5 w-3.5 mr-1 text-[#4DA8DA]" />
                                          CTC: {company.ctc}
                                        </p>
                                      )}
                                      {company.stipend && (
                                        <p className="text-sm text-gray-600 flex items-center">
                                          <Briefcase className="h-3.5 w-3.5 mr-1 text-[#4DA8DA]" />
                                          Stipend: {company.stipend}
                                        </p>
                                      )}
                                      <p className="text-sm text-gray-600 flex items-center">
                                        <Users className="h-3.5 w-3.5 mr-1 text-[#4DA8DA]" />
                                        {company.count} {company.count === 1 ? "student" : "students"} placed
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="bg-blue-50 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                            <Calendar className="h-8 w-8 text-[#0A2463]" />
                          </div>
                          <h3 className="text-xl font-medium text-[#0A2463] mb-2">Preparation Phase</h3>
                          <p className="text-gray-600 max-w-md mx-auto">
                            This is a preparation period for students with resume building workshops, mock interviews,
                            and placement registration.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-amber-500" />
                  Important Notes for Students
                </h3>
                <ul className="space-y-3 text-amber-700">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>
                      All dates are tentative and subject to change based on company availability and academic calendar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>
                      Students must register on the Superset platform to participate in the placement process.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>
                      Once a student accepts an offer, they will not be eligible for further placement opportunities as
                      per institute policy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>
                      Students are advised to regularly check their emails and the Superset platform for updates.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="statistics" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Offer Types */}
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-[#0A2463] mb-4 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-[#4DA8DA]" />
                      Offer Types Distribution
                    </h3>
                    <div className="space-y-4">
                      {offerTypeData.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{item.type}</span>
                            <span className="text-sm text-gray-500">
                              {item.count} ({item.percentage}%)
                            </span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div
                              className="h-2 bg-[#4DA8DA] rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Salary Ranges */}
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-[#0A2463] mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-[#4DA8DA]" />
                      Salary Range Distribution
                    </h3>
                    <div className="space-y-4">
                      {salaryRangeData.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{item.range}</span>
                            <span className="text-sm text-gray-500">
                              {item.count} ({item.percentage}%)
                            </span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div
                              className="h-2 bg-[#4DA8DA] rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Statistics */}
              <div className="mt-6 bg-[#0A2463] text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">2024-25 Placement Highlights</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">182</div>
                    <div className="text-sm text-blue-100">Total Offers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">149</div>
                    <div className="text-sm text-blue-100">Unique Placements</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">31.64</div>
                    <div className="text-sm text-blue-100">Highest CTC (LPA)</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm text-blue-100">Companies</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CSE Department */}
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-[#0A2463] mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-[#4DA8DA]" />
                      Computer Science
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">B.Tech CSE</span>
                        <span className="font-medium">58 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">B.Tech CSE (AI)</span>
                        <span className="font-medium">21 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">M.Tech CSE</span>
                        <span className="font-medium">8 offers</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full mt-2">
                        <div className="h-1 bg-[#4DA8DA] rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="text-sm text-gray-500">85% placement rate</div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Top Recruiting Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Visa Inc", "AMD", "Amazon", "Accenture", "Turing"].map((company, idx) => (
                          <span key={idx} className="bg-blue-50 text-xs px-2 py-1 rounded-full text-blue-700">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ECE Department */}
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-[#0A2463] mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-[#4DA8DA]" />
                      Electronics
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">B.Tech ECE</span>
                        <span className="font-medium">42 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">M.Tech ECE (VLSI)</span>
                        <span className="font-medium">4 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">M.Tech ECE (CSD)</span>
                        <span className="font-medium">1 offer</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full mt-2">
                        <div className="h-1 bg-[#4DA8DA] rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <div className="text-sm text-gray-500">78% placement rate</div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Top Recruiting Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Mbit Wireless", "AMD", "Global Foundaries", "Quantrium", "Accenture"].map((company, idx) => (
                          <span key={idx} className="bg-blue-50 text-xs px-2 py-1 rounded-full text-blue-700">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mechanical & Smart Mfg Department */}
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-[#0A2463] mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-[#4DA8DA]" />
                      Mechanical & Smart Mfg
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">B.Tech Mechanical</span>
                        <span className="font-medium">25 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">B.Tech Smart Mfg</span>
                        <span className="font-medium">12 offers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">M.Tech (SM/ESD)</span>
                        <span className="font-medium">2 offers</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full mt-2">
                        <div className="h-1 bg-[#4DA8DA] rounded-full" style={{ width: "72%" }}></div>
                      </div>
                      <div className="text-sm text-gray-500">72% placement rate</div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Top Recruiting Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["GE Vernova", "Caterpillar", "Stellantis", "Trimble", "L&T"].map((company, idx) => (
                          <span key={idx} className="bg-blue-50 text-xs px-2 py-1 rounded-full text-blue-700">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Gender Distribution */}
              <div className="mt-6 bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Gender Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span>Male Students</span>
                      <span>82%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full">
                      <div className="h-3 bg-blue-400 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span>Female Students</span>
                      <span>18%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full">
                      <div className="h-3 bg-pink-400 rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Company details dialog */}
      <AnimatePresence>
        {selectedCompany && (
          <Dialog open={!!selectedCompany} onOpenChange={(open) => !open && setSelectedCompany(null)}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#0A2463] flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    {selectedCompany.logo ? (
                      <Image
                        src={selectedCompany.logo || "/placeholder.svg"}
                        alt={selectedCompany.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Building className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  {selectedCompany.name}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Offer Type</h4>
                    <p className="text-[#0A2463] font-medium">{selectedCompany.offerType}</p>
                  </div>
                </div>

                {selectedCompany.ctc && (
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-700">CTC</h4>
                      <p className="text-[#0A2463] font-medium">{selectedCompany.ctc}</p>
                    </div>
                  </div>
                )}

                {selectedCompany.stipend && (
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-700">Stipend</h4>
                      <p className="text-[#0A2463] font-medium">{selectedCompany.stipend}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Students Placed</h4>
                    <p className="text-[#0A2463]">
                      {selectedCompany.count} {selectedCompany.count === 1 ? "student" : "students"} from IIITDM
                      Kancheepuram
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Typical Selection Process</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4DA8DA]"></span>
                        <span className="text-gray-700">Resume Shortlisting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4DA8DA]"></span>
                        <span className="text-gray-700">Online Assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4DA8DA]"></span>
                        <span className="text-gray-700">Technical Interview</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4DA8DA]"></span>
                        <span className="text-gray-700">HR Interview</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  className="gap-2 border-[#0A2463] text-[#0A2463]"
                  onClick={() => setSelectedCompany(null)}
                >
                  <X className="h-4 w-4" />
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
