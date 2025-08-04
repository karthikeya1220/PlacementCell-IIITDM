"use client"
import { motion } from "framer-motion"
import { recruitmentProcess } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Presentation, FileSearch, FileText, Code, Users, CheckCircle } from "lucide-react"

const icons = {
  Mail,
  Presentation,
  FileSearch,
  FileText,
  Code,
  Users,
  CheckCircle,
}

export default function RecruitmentProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Recruitment Process</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We have a streamlined recruitment process to help companies efficiently identify and select the best talent
            from our institute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">How to Recruit from IIITDM</h3>
            <p className="text-gray-600 mb-6">
              Our placement cell works closely with companies to ensure a smooth and efficient recruitment process. We
              provide comprehensive support at every stage, from initial contact to final selection.
            </p>

            <div className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-6 text-white mb-8">
              <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Single point of contact for all recruitment needs</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Flexible scheduling to accommodate company timelines</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Well-equipped facilities for conducting recruitment activities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Option for both in-person and virtual recruitment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Pre-screened candidates based on company requirements</span>
                </li>
              </ul>
            </div>

            <Card className="border-[#4DA8DA]/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-[#4DA8DA]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">placements@iiitdm.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-[#4DA8DA]" />
                    <div>
                      <p className="font-medium">Placement Officers</p>
                      <p className="text-gray-600">Prof. Senthilkumaran K (Placement Officer)</p>
                      <p className="text-gray-600">Dr. Noor Mahammad S (Faculty Advisor)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Presentation className="h-5 w-5 mr-3 text-[#4DA8DA]" />
                    <div>
                      <p className="font-medium">Schedule a Visit</p>
                      <p className="text-gray-600">Contact us to arrange a campus visit or virtual meeting</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Recruitment Timeline</h3>
            <div className="relative border-l-2 border-[#4DA8DA] pl-8 ml-4 space-y-8">
              {recruitmentProcess.map((step, index) => {
                const IconComponent = icons[step.icon as keyof typeof icons]

                return (
                  <div key={index} className="relative">
                    <div className="absolute -left-[41px] bg-white border-2 border-[#4DA8DA] rounded-full w-8 h-8 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-[#0A2463]" />
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-[#0A2463] text-white">Step {step.step}</Badge>
                        <h4 className="text-lg font-semibold ml-3 text-[#0A2463]">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-[#0A2463] mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#4DA8DA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Placement Season
              </h4>
              <p className="text-gray-600">
                Our main placement season runs from July to December each year, with pre-placement talks beginning in
                July and final placements concluding by December. Internship recruitment typically happens between
                August and January.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-[#0A2463] mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#4DA8DA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Required Documents
              </h4>
              <p className="text-gray-600">
                Companies are requested to provide job descriptions, eligibility criteria, compensation details, and the
                recruitment process outline. The Employer Registration Form (ERF) should be submitted before scheduling
                recruitment activities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-[#0A2463] mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#4DA8DA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Facilities Available
              </h4>
              <p className="text-gray-600">
                We provide fully equipped interview rooms, conference halls, computer labs for online tests, high-speed
                internet connectivity, video conferencing facilities, and dedicated spaces for group discussions and
                presentations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
