"use client"
import { motion } from "framer-motion"
import { industryPartners } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function IndustryConnections() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            Partnerships
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Industry Connections</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            IIITDM Kancheepuram maintains strong ties with industry leaders, ensuring our curriculum and research remain
            relevant to real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Industry Collaborations</h3>
            <p className="text-gray-600 mb-6">
              Our institute has established strategic partnerships with leading companies across various sectors,
              creating a robust ecosystem for knowledge exchange and innovation.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Research Partnerships</h4>
                <p className="text-gray-600">
                  Collaborative research projects with industry partners focus on solving real-world challenges and
                  developing innovative solutions. These partnerships provide students with exposure to industry
                  practices and emerging technologies.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Sponsored Laboratories</h4>
                <p className="text-gray-600">
                  Industry-sponsored labs equipped with cutting-edge technology provide students with hands-on
                  experience on tools and technologies currently used in the industry, bridging the gap between academic
                  learning and professional practice.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Guest Lecture Series</h4>
                <p className="text-gray-600">
                  Regular interactions with industry experts through guest lectures, workshops, and seminars expose
                  students to current industry trends, challenges, and best practices, enhancing their understanding of
                  professional environments.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Industry-Aligned Curriculum</h3>
            <p className="text-gray-600 mb-6">
              Our curriculum is continuously updated with input from industry experts to ensure students develop skills
              that are in high demand in the job market.
            </p>

            <div className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Key Industry Initiatives</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#4DA8DA]">Industry Advisory Board</h5>
                    <p className="text-gray-200 text-sm">
                      Senior executives from partner companies provide strategic guidance on curriculum development and
                      research focus areas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#4DA8DA]">Industry-Sponsored Projects</h5>
                    <p className="text-gray-200 text-sm">
                      Final year students work on real-world problems provided by industry partners, developing
                      practical solutions under joint guidance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#4DA8DA]">Professional Certification Programs</h5>
                    <p className="text-gray-200 text-sm">
                      Industry-recognized certification courses integrated into the curriculum to enhance employability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#4DA8DA]">Faculty Development Programs</h5>
                    <p className="text-gray-200 text-sm">
                      Regular industry immersion for faculty to stay updated with the latest technologies and practices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#0A2463] mb-8 text-center">Our Industry Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industryPartners.map((partner, index) => (
              <Card key={index} className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 w-16 mb-4 flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <h4 className="font-semibold text-[#0A2463] text-center">{partner.name}</h4>
                  <p className="text-gray-600 text-sm text-center mt-2">{partner.collaboration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
