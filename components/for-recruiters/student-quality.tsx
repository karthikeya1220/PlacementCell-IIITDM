"use client"
import { motion } from "framer-motion"
import { studentAchievements } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code, PenTool, Brain, Book, Users, Presentation, Cpu, LineChart, Globe } from "lucide-react"

export default function StudentQuality() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            Our Students
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Student Quality</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            IIITDM students are selected through rigorous national-level entrance examinations, ensuring high academic
            caliber and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Admission Process</h3>
            <p className="text-gray-600 mb-6">
              Our students are admitted through highly competitive national-level examinations, placing them among the
              top academic performers in the country:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Undergraduate Admissions</h4>
                <p className="text-gray-600 mb-4">
                  Students are admitted through the Joint Entrance Examination (JEE) Advanced, which selects the top
                  2.5% of over 1.5 million students who appear for JEE Main.
                </p>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">Top 2.5%</div>
                    <div className="text-sm text-gray-500">JEE Percentile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">9,000+</div>
                    <div className="text-sm text-gray-500">JEE Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">300</div>
                    <div className="text-sm text-gray-500">Annual Intake</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Postgraduate Admissions</h4>
                <p className="text-gray-600 mb-4">
                  M.Tech students are selected through the Graduate Aptitude Test in Engineering (GATE), ensuring strong
                  fundamentals and research aptitude.
                </p>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">Top 5%</div>
                    <div className="text-sm text-gray-500">GATE Percentile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">750+</div>
                    <div className="text-sm text-gray-500">GATE Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2463]">120</div>
                    <div className="text-sm text-gray-500">Annual Intake</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Student Skills & Competencies</h3>
            <p className="text-gray-600 mb-6">
              Our curriculum and training programs ensure students develop a comprehensive skill set that combines technical expertise with professional competencies.
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <Code className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Programming</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Proficient in multiple programming languages and paradigms
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <PenTool className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Design</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    User-centered design principles and methodologies
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <Brain className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Problem Solving</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Analytical thinking and innovative solution development
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <Cpu className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Systems Design</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Architecture, integration and optimization skills
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <Users className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Teamwork</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Collaborative project execution and leadership
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-[#4DA8DA]/20 mr-3">
                      <Globe className="h-5 w-5 text-[#0A2463]" />
                    </div>
                    <h5 className="font-medium text-[#0A2463]">Global Perspective</h5>
                  </div>
                  <p className="text-sm text-gray-600">
                    Industry-aware with international standards knowledge
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#0A2463] mb-8 text-center">Student Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentAchievements.map((achievement, index) => (
              <Card key={index} className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-[#4DA8DA]/20 flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-[#0A2463]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2463]">{achievement.title}</h4>
                      <Badge className="mt-1 mb-2 bg-[#0A2463] text-white">{achievement.position}</Badge>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                      <p className="text-gray-500 text-xs mt-2">{achievement.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
