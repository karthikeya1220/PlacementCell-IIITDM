"use client"

import { motion } from "framer-motion"
import { Users, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamHero() {
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
                Meet Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 leading-tight">
                The <span className="text-[#4DA8DA]">Dedicated Team</span> Behind Our Placement Success
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our placement team consists of dedicated faculty members, staff, and student coordinators who work
                tirelessly to connect our talented students with the best opportunities in the industry.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
                  <Link href="#contact-us">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#0A2463] text-[#0A2463] gap-2">
                  <Link href="#team-leadership">
                    <Users className="h-4 w-4" />
                    Meet the Team
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right content - Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2463] mb-4 flex items-center gap-2">
                  <span className="p-1 rounded-full bg-[#4DA8DA]/20">
                    <Phone className="h-5 w-5 text-[#4DA8DA]" />
                  </span>
                  Quick Contact
                </h3>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:placement@iiitdm.ac.in" className="text-[#4DA8DA] hover:underline">
                        placement@iiitdm.ac.in
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+919344615687" className="text-[#4DA8DA] hover:underline">
                        +91 934 461 5687
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Users className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
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
