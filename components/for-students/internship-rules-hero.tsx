"use client"

import { motion } from "framer-motion"
import { FileText, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InternshipRulesHero() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-12"
            >
              <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
                For Students
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 leading-tight">
                Internship <span className="text-[#4DA8DA]">Rules & Guidelines</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl">
                Understand the official internship rules and guidelines to ensure a successful internship experience
                through the placement cell. These rules are designed to provide a fair and transparent process for all
                students.
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
                <Button asChild variant="outline" className="border-[#4DA8DA] text-[#4DA8DA] gap-2">
                  <Link href="#acknowledgement">
                    <CheckCircle className="h-4 w-4" />
                    Acknowledge Rules
                  </Link>
                </Button>
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
