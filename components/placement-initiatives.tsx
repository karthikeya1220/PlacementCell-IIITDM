"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Laptop,
  Users,
  Building,
  GraduationCap,
  Award,
  Layers,
  BarChart,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function PlacementInitiatives() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Placement Initiatives
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Our Strategic Partnerships</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhancing student opportunities through innovative platforms and collaborations
          </p>
        </motion.div>

        {/* Superset Platform Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-[#4DA8DA]/10 mr-4">
                    <Laptop className="h-6 w-6 text-[#0A2463]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2463]">Superset Platform</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  IIITDM Kancheepuram has integrated with Superset, a cutting-edge placement management platform that
                  streamlines the entire recruitment process for students and companies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/10 mr-3 mt-1">
                      <Users className="h-4 w-4 text-[#0A2463]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Centralized Profiles</h4>
                      <p className="text-sm text-gray-500">Complete student profiles accessible to recruiters</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/10 mr-3 mt-1">
                      <Building className="h-4 w-4 text-[#0A2463]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Company Dashboard</h4>
                      <p className="text-sm text-gray-500">Dedicated portal for company requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/10 mr-3 mt-1">
                      <BarChart className="h-4 w-4 text-[#0A2463]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Analytics</h4>
                      <p className="text-sm text-gray-500">Real-time placement statistics and insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/10 mr-3 mt-1">
                      <Zap className="h-4 w-4 text-[#0A2463]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Seamless Process</h4>
                      <p className="text-sm text-gray-500">Automated scheduling and notifications</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
                  <Link href="#superset-login">
                    Access Superset
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-[#0A2463]/10 mr-4">
                    <GraduationCap className="h-6 w-6 text-[#4DA8DA]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2463]">SIDI Collaboration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  IIITDM Kancheepuram is proud to collaborate with Skill India Digital Initiative (SIDI) to enhance
                  student employability through specialized training and certification programs.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#0A2463]/10 mr-3 mt-1">
                      <Award className="h-4 w-4 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Industry Certifications</h4>
                      <p className="text-sm text-gray-500">Recognized credentials for students</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#0A2463]/10 mr-3 mt-1">
                      <Layers className="h-4 w-4 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Skill Development</h4>
                      <p className="text-sm text-gray-500">Focused training on in-demand skills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#0A2463]/10 mr-3 mt-1">
                      <Globe className="h-4 w-4 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Industry Connect</h4>
                      <p className="text-sm text-gray-500">Direct access to industry partners</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#0A2463]/10 mr-3 mt-1">
                      <Sparkles className="h-4 w-4 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">Innovation Projects</h4>
                      <p className="text-sm text-gray-500">Hands-on experience with real challenges</p>
                    </div>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-[#0A2463] text-[#0A2463] group">
                  <Link href="#sidi-programs">
                    Explore SIDI Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
