"use client"
import { motion } from "framer-motion"
import { skillDevelopmentInitiatives } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { BookOpen, Users, Clock } from "lucide-react"

export default function SkillDevelopment() {
  // Transform data for chart
  const chartData = skillDevelopmentInitiatives.map((initiative) => ({
    name: initiative.title.split(" ")[0],
    students: initiative.metrics.students,
    courses: initiative.metrics.courses || 0,
    hours: initiative.metrics.hours || 0,
    events: initiative.metrics.events || 0,
    projects: initiative.metrics.projects || 0,
    sessions: initiative.metrics.sessions || 0,
    companies: initiative.metrics.companies || 0,
  }))

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
            Training
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Skill Development Initiatives</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We provide comprehensive training programs to ensure our students develop both technical expertise and
            professional skills required for successful careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Skill Development Metrics</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Students Trained" fill="#0A2463" />
                  <Bar dataKey="courses" name="Courses Offered" fill="#4DA8DA" />
                  <Bar dataKey="hours" name="Training Hours" fill="#007EA7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Our Approach to Skill Development</h3>
            <p className="text-gray-600 mb-6">
              IIITDM Kancheepuram takes a holistic approach to skill development, focusing on both technical expertise
              and professional competencies that prepare students for successful careers.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-[#4DA8DA]/20 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-[#0A2463]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Industry-Aligned Curriculum</h4>
                    <p className="text-gray-600">
                      Our curriculum is regularly updated with input from industry experts to ensure students learn the
                      most relevant and in-demand skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-[#4DA8DA]/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#0A2463]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Hands-on Learning</h4>
                    <p className="text-gray-600">
                      Practical projects, lab work, and industry internships provide students with real-world experience
                      and the opportunity to apply theoretical knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-[#4DA8DA]/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#0A2463]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0A2463] mb-2">Continuous Assessment</h4>
                    <p className="text-gray-600">
                      Regular feedback and assessment help students identify areas for improvement and track their
                      progress in developing key skills.
                    </p>
                  </div>
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
          <h3 className="text-2xl font-semibold text-[#0A2463] mb-8 text-center">Key Skill Development Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillDevelopmentInitiatives.map((initiative, index) => (
              <Card key={index} className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-[#0A2463] mb-3">{initiative.title}</h4>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {initiative.metrics.students && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.students}</p>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                    )}
                    {initiative.metrics.courses && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.courses}</p>
                        <p className="text-xs text-gray-500">Courses</p>
                      </div>
                    )}
                    {initiative.metrics.hours && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.hours}</p>
                        <p className="text-xs text-gray-500">Hours</p>
                      </div>
                    )}
                    {initiative.metrics.events && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.events}</p>
                        <p className="text-xs text-gray-500">Events</p>
                      </div>
                    )}
                    {initiative.metrics.projects && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.projects}</p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                    )}
                    {initiative.metrics.sessions && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.sessions}</p>
                        <p className="text-xs text-gray-500">Sessions</p>
                      </div>
                    )}
                    {initiative.metrics.companies && (
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-[#0A2463]">{initiative.metrics.companies}</p>
                        <p className="text-xs text-gray-500">Companies</p>
                      </div>
                    )}
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
