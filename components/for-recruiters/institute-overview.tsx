"use client"
import { motion } from "framer-motion"
import { instituteTimeline, instituteFacts } from "./why-iiitdm-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, FileText, Lightbulb, MapPin } from "lucide-react"

export default function InstituteOverview() {
  return (
    <section id="institute-overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Institute Overview</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Established in 2007 by the Ministry of Education, IIITDM Kancheepuram is an Institute of National Importance
            with a unique focus on Product Lifecycle Management (PLM), integrating IT, Design, and Manufacturing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Our Journey</h3>
            <p className="text-gray-600 mb-6">
              Since our inception, IIITDM Kancheepuram has been at the forefront of technical education in India,
              combining the best of information technology, design thinking, and manufacturing expertise to create a
              unique educational experience.
            </p>
            <p className="text-gray-600 mb-6">
              Our institute has grown from strength to strength, establishing itself as a premier destination for
              students seeking quality education and for companies looking to recruit top-tier talent.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {instituteFacts.map((fact, index) => (
                <Card key={index} className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#0A2463] mb-1">{fact.value}</div>
                    <div className="text-sm text-gray-500">{fact.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Timeline & Milestones</h3>
            <div className="relative border-l-2 border-[#4DA8DA] pl-8 ml-4 space-y-8">
              {instituteTimeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] bg-white border-2 border-[#4DA8DA] rounded-full w-8 h-8 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-[#0A2463]" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-[#0A2463] text-white">{item.year}</Badge>
                      <h4 className="text-lg font-semibold ml-3 text-[#0A2463]">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Unique Approach</h3>
              <p className="mb-6">
                IIITDM Kancheepuram stands apart with its integrated approach to education that combines:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-0.5 text-[#4DA8DA]" />
                  <span>Strong theoretical foundations with practical applications</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-0.5 text-[#4DA8DA]" />
                  <span>Industry-aligned curriculum developed with expert input</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 mr-3 mt-0.5 text-[#4DA8DA]" />
                  <span>Interdisciplinary learning across IT, design, and manufacturing</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-3 mt-0.5 text-[#4DA8DA]" />
                  <span>Innovation-focused education that encourages entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#4DA8DA]" />
                  <span>Strategic location in Chennai's IT corridor with industry access</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="IIITDM Campus"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
