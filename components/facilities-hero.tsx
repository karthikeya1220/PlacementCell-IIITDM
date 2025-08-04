"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FacilitiesHero() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
              For Recruiters
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 leading-tight">
              World-Class <span className="text-[#4DA8DA]">Facilities</span> for Your Recruitment Drive
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our campus offers state-of-the-art infrastructure designed to make your recruitment process seamless and
              efficient.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
                <Link href="#facilities-showcase">
                  Explore Facilities
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#0A2463] text-[#0A2463]">
                <Link href="#contact">Contact Placement Office</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right content - Facility illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Campus+Facilities"
                alt="IIITDM Campus Facilities"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2463]/40 to-transparent"></div>

              {/* Floating facility cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-3 max-w-[180px]"
              >
                <div className="p-2 rounded-full bg-[#4DA8DA]/20">
                  <Building className="h-5 w-5 text-[#4DA8DA]" />
                </div>
                <div>
                  <p className="font-medium text-[#0A2463]">Smart Classrooms</p>
                  <p className="text-xs text-gray-600">Interactive spaces</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center gap-3 max-w-[180px]"
              >
                <div className="p-2 rounded-full bg-[#4DA8DA]/20">
                  <Building className="h-5 w-5 text-[#4DA8DA]" />
                </div>
                <div>
                  <p className="font-medium text-[#0A2463]">Interview Rooms</p>
                  <p className="text-xs text-gray-600">Professional setup</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-[#4DA8DA]/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#0A2463]/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2463] via-[#4DA8DA] to-[#0A2463]/20"></div>
    </section>
  )
}
