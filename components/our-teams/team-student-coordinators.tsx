"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamCard from "./team-card"
import { teamMembers } from "./team-data"

export default function TeamStudentCoordinators() {
  const [activeTab, setActiveTab] = useState("cse")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const studentMembers = teamMembers.filter((member) => member.category === "student")
  const cseMembers = studentMembers.filter((member) => member.studentType === "cse")
  const eceMembers = studentMembers.filter((member) => member.studentType === "ece")
  const meMembers = studentMembers.filter((member) => member.studentType === "me")
  const designMembers = studentMembers.filter((member) => member.studentType === "design")

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Students
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Student Coordinators</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our student representatives who assist in the placement process and help their peers
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <Tabs defaultValue="cse" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="cse" className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white">
                  Computer Science
                </TabsTrigger>
                <TabsTrigger value="ece" className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white">
                  Electronics
                </TabsTrigger>
                <TabsTrigger value="me" className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white">
                  Mechanical
                </TabsTrigger>
                <TabsTrigger value="design" className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white">
                  Design
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cse" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                {cseMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamCard member={member} variant="student" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ece" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                {eceMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamCard member={member} variant="student" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="me" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                {meMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamCard member={member} variant="student" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                {designMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamCard member={member} variant="student" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
