"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Users, Building, BookOpen, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQsHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#0A2463] to-[#1E3A8A]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 text-white"
          >
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-100 rounded-full text-sm font-medium mb-4">
              Placement Season 2024-25
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Guide to <span className="text-[#4DA8DA]">Placements</span> at IIITDM Kancheepuram
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Find all the information you need about the placement process, including schedules, frequently asked
              questions, and preparation resources to help you secure your dream job.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-white hover:bg-blue-50 text-[#0A2463] group">
                <Link href="#schedule">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="#faqs">
                  <BookOpen className="h-4 w-4" />
                  Browse FAQs
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="/placement-rules">
                  <Download className="h-4 w-4" />
                  Placement Rules
                </Link>
              </Button>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">182</div>
                <div className="text-sm text-blue-100 mt-1">Total Offers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">149</div>
                <div className="text-sm text-blue-100 mt-1">Unique Placements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">31.6</div>
                <div className="text-sm text-blue-100 mt-1">Highest CTC (LPA)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">40+</div>
                <div className="text-sm text-blue-100 mt-1">Companies</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Placement Success Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A2463] to-[#4DA8DA] p-4 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Placement Highlights 2024-25
                </h3>
              </div>

              <div className="p-6">
                {/* Top Companies */}
                <div className="mb-6">
                  <h4 className="text-[#0A2463] font-semibold mb-3 flex items-center">
                    <Building className="h-4 w-4 mr-2 text-[#4DA8DA]" />
                    Top Recruiting Companies
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {["Visa Inc", "AMD", "Accenture", "Amazon", "Plum", "GE Vernova"].map((company, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-2 text-center text-sm font-medium text-gray-700"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department Distribution */}
                <div className="mb-6">
                  <h4 className="text-[#0A2463] font-semibold mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#4DA8DA]" />
                    Department-wise Placements
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CSE & CSE(AI)</span>
                        <span className="font-medium">79 offers</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#4DA8DA] rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>ECE</span>
                        <span className="font-medium">47 offers</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#4DA8DA] rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mechanical & Smart Mfg</span>
                        <span className="font-medium">39 offers</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#4DA8DA] rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="/statistics"
                    className="flex items-center justify-center w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    View Detailed Statistics
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="white"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  )
}
