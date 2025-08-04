"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail, Phone, Calendar } from "lucide-react"

export default function InternshipRulesDownload() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="download" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Download section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Download Complete Rules</h3>
                  <p className="text-gray-600 mb-6">
                    Download the complete internship rules document for offline reference. This document contains all
                    the rules and guidelines in detail.
                  </p>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-[#4DA8DA]" />
                      <div>
                        <p className="font-medium text-[#0A2463]">Internship Rules 2023-24.pdf</p>
                        <p className="text-sm text-gray-500">PDF, 1.5 MB</p>
                      </div>
                      <Button className="ml-auto bg-[#0A2463] hover:bg-[#0A2463]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-[#4DA8DA]" />
                      <div>
                        <p className="font-medium text-[#0A2463]">Internship Forms.zip</p>
                        <p className="text-sm text-gray-500">ZIP, 2.8 MB</p>
                      </div>
                      <Button className="ml-auto bg-[#0A2463] hover:bg-[#0A2463]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-[#4DA8DA]" />
                      <div>
                        <p className="font-medium text-[#0A2463]">Internship Report Template.docx</p>
                        <p className="text-sm text-gray-500">DOCX, 0.5 MB</p>
                      </div>
                      <Button className="ml-auto bg-[#0A2463] hover:bg-[#0A2463]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Last updated: November 5, 2023</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <Card className="h-full bg-gradient-to-br from-[#0A2463] to-[#4DA8DA] text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Internship Timeline
                  </h3>

                  <div className="space-y-6 flex-grow">
                    <div className="relative pl-6 border-l-2 border-white/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
                      <h4 className="font-bold">Registration</h4>
                      <p className="text-white/80 text-sm">November 15 - December 5, 2023</p>
                      <p className="text-white/70 text-sm mt-1">Register on the placement portal</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-white/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
                      <h4 className="font-bold">Company Visits</h4>
                      <p className="text-white/80 text-sm">January 10 - February 28, 2024</p>
                      <p className="text-white/70 text-sm mt-1">Interviews and selection process</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-white/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
                      <h4 className="font-bold">Offer Acceptance</h4>
                      <p className="text-white/80 text-sm">March 1 - March 15, 2024</p>
                      <p className="text-white/70 text-sm mt-1">Accept or reject internship offers</p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
                      <h4 className="font-bold">Internship Period</h4>
                      <p className="text-white/80 text-sm">May 15 - July 15, 2024</p>
                      <p className="text-white/70 text-sm mt-1">Summer internship duration</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-white/80" />
                        <a href="mailto:internship@iiitdm.ac.in" className="text-white/80 hover:text-white text-sm">
                          internship@iiitdm.ac.in
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-white/80" />
                        <a href="tel:+917013310441" className="text-white/80 hover:text-white text-sm">
                          +91 70133 10441
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
