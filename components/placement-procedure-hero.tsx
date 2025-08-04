"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PlacementProcedureHero() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50">      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
                For Recruiters
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 leading-tight">
                Placement <span className="text-[#4DA8DA]">Procedure</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A streamlined 8-step process designed to connect top companies with our talented students.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
                  <Link href="#timeline">
                    View Procedure
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#0A2463] text-[#0A2463] gap-2">
                  <Link href="#erf">
                    <FileText className="h-4 w-4" />
                    Download ERF
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right content - Step indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2463] mb-4 flex items-center gap-2">
                  <span className="p-1 rounded-full bg-[#4DA8DA]/20">
                    <CheckCircle className="h-5 w-5 text-[#4DA8DA]" />
                  </span>
                  8-Step Process
                </h3>

                <div className="space-y-3">
                  {[
                    { step: 1, name: "Invitation", delay: 0.3 },
                    { step: 2, name: "Response", delay: 0.4 },
                    { step: 3, name: "Dates", delay: 0.5 },
                    { step: 4, name: "Registration", delay: 0.6 },
                  ].map((item) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A2463] text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </motion.div>
                  ))}

                  <div className="h-6 border-l-2 border-dashed border-gray-300 ml-4"></div>

                  <Link
                    href="#timeline"
                    className="inline-flex items-center text-[#4DA8DA] font-medium hover:text-[#0A2463] transition-colors"
                  >
                    See all steps
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-3 -right-3 w-20 h-20 bg-[#4DA8DA]/10 rounded-full"></div>
                <div className="absolute -z-10 -bottom-3 -left-3 w-16 h-16 bg-[#0A2463]/10 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#0A2463]"></div>
      <div className="absolute bottom-2 left-0 right-0 h-1 bg-[#4DA8DA]"></div>
    </section>
  )
}
