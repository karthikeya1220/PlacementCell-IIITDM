"use client"

import { motion } from "framer-motion"
import { FileText, Download, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PlacementRulesHero() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
                For Students
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 leading-tight">
                Placement <span className="text-[#4DA8DA]">Rules & Guidelines</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Familiarize yourself with the official placement rules and guidelines to ensure a smooth and successful
                placement process.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
                  <Link href="#rules">
                    <FileText className="mr-2 h-4 w-4" />
                    View Rules
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#0A2463] text-[#0A2463] gap-2">
                  <Link href="#download">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right content - Important notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2463] mb-4 flex items-center gap-2">
                  <span className="p-1 rounded-full bg-[#4DA8DA]/20">
                    <AlertTriangle className="h-5 w-5 text-[#4DA8DA]" />
                  </span>
                  Important Notice
                </h3>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <p className="text-red-700 font-medium">Mandatory Acknowledgement</p>
                    <p className="text-gray-700 text-sm mt-1">
                      All students participating in the placement process must acknowledge these rules. Failure to
                      comply may result in debarment from the placement process.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500"
                  >
                    <p className="text-yellow-700 font-medium">Rule Updates</p>
                    <p className="text-gray-700 text-sm mt-1">
                      These rules are subject to change. Students are responsible for staying updated with the latest
                      version available on the placement portal.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500"
                  >
                    <p className="text-green-700 font-medium">Clarifications</p>
                    <p className="text-gray-700 text-sm mt-1">
                      For any clarifications regarding these rules, please contact the placement office or your
                      department placement coordinator.
                    </p>
                  </motion.div>
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2463] via-[#4DA8DA] to-[#0A2463]/20"></div>
    </section>
  )
}
