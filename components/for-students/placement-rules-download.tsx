"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function PlacementRulesDownload() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="download" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Download section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Download Complete Rules</h3>
                  <p className="text-gray-600 mb-6">
                    Download the complete placement rules document for offline reference. This document contains all the
                    rules and guidelines in detail.
                  </p>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-[#4DA8DA]" />
                      <div>
                        <p className="font-medium text-[#0A2463]">Placement Rules 2023-24.pdf</p>
                        <p className="text-sm text-gray-500">PDF, 1.2 MB</p>
                      </div>
                      <Button className="ml-auto bg-[#0A2463] hover:bg-[#0A2463]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-6 w-6 text-[#4DA8DA]" />
                      <div>
                        <p className="font-medium text-[#0A2463]">Placement Forms.zip</p>
                        <p className="text-sm text-gray-500">ZIP, 3.5 MB</p>
                      </div>
                      <Button className="ml-auto bg-[#0A2463] hover:bg-[#0A2463]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Last updated: October 15, 2023</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-[#0A2463] text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                  <p className="mb-6 text-white/80">
                    If you have any questions or need clarification regarding the placement rules, feel free to contact
                    the placement cell.
                  </p>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:placement.students@iiitdm.ac.in"
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          placement.students@iiitdm.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+917013310441" className="text-white/80 hover:text-white transition-colors">
                          +91 70133 10441
                        </a>
                        <p className="text-sm text-white/60 mt-1">(Placement Secretary)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      <Link href="/faqs-schedule">View FAQs</Link>
                    </Button>
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
