"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { academicPrograms } from "./why-iiitdm-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { BookOpen, Award, Medal, BarChart3, Layers, GraduationCap } from "lucide-react"

// Define CSS utility classes
const styles = {
  bgGridPattern: {
    backgroundImage: "radial-gradient(rgba(10, 36, 99, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  },
  bgGradientRadial: {
    backgroundImage: "radial-gradient(circle, var(--from-color) 0%, var(--to-color) 100%)",
  },
}

export default function AcademicExcellence() {
  const [activeTab, setActiveTab] = useState("undergraduate")
  const [programStats, setProgramStats] = useState<{ name: string; students: number; departments: number; }[]>([])
  
  useEffect(() => {
    const stats = [
      { name: 'B.Tech', students: 149, departments: 7 },
      { name: 'M.Tech', students: 75, departments: 6 },
      { name: 'Dual Degree', students: 63, departments: 4 },
      { name: 'M.Des', students: 13, departments: 1 },
      { name: 'Ph.D', students: 42, departments: 6 }
    ]
    setProgramStats(stats)
  }, [])

  const filteredPrograms = academicPrograms.filter((program) => {
    if (activeTab === "undergraduate") return program.name.includes("B.Tech")
    if (activeTab === "postgraduate") return program.name.includes("M.Tech") || program.name.includes("Dual") || program.name.includes("M.Des")
    if (activeTab === "doctoral") return program.name.includes("Ph.D")
    return true
  })
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0A2463]/5 to-transparent opacity-70"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#4DA8DA]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-32 w-64 h-64 bg-[#0A2463]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#4DA8DA] text-[#0A2463] text-sm font-medium shadow-sm">
            Academic Excellence
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2463] mb-8">
            Exceptional Education <span className="text-[#4DA8DA]">Standards</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our unique curriculum integrates Information Technology, Design, and Manufacturing, preparing students to
            tackle complex real-world challenges with innovative solutions.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <BookOpen className="h-5 w-5 mr-2 text-[#4DA8DA]" />
              <span className="text-sm font-medium text-gray-700">19+ Specialized Programs</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <GraduationCap className="h-5 w-5 mr-2 text-[#4DA8DA]" />
              <span className="text-sm font-medium text-gray-700">1500+ Students</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Award className="h-5 w-5 mr-2 text-[#4DA8DA]" />
              <span className="text-sm font-medium text-gray-700">95% Placement Rate</span>
            </div>
          </div>
        </motion.div>{/* Program Overview Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 bg-[#0A2463]/5 rounded-full mb-4">
              <Layers className="h-7 w-7 text-[#4DA8DA]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-4">
              Program Overview
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs designed to nurture the next generation of innovators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-white rounded-xl p-8 lg:p-10 shadow-lg border border-[#4DA8DA]/10 overflow-hidden relative"
          >            <div className="absolute top-0 right-0 w-64 h-64 opacity-50 -translate-y-1/2 translate-x-1/3 rounded-full" 
              style={{ 
                '--from-color': 'rgba(77, 168, 218, 0.1)', 
                '--to-color': 'transparent',
                ...styles.bgGradientRadial 
              } as React.CSSProperties}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-50 translate-y-1/2 -translate-x-1/3 rounded-full"
              style={{ 
                '--from-color': 'rgba(10, 36, 99, 0.1)', 
                '--to-color': 'transparent',
                ...styles.bgGradientRadial 
              } as React.CSSProperties}></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-1">
                <h4 className="text-xl font-semibold text-[#0A2463] mb-3">Academic Structure</h4>
                <p className="text-gray-600 mb-4">Our institute offers a diverse range of programs across various academic levels to meet different educational goals and career aspirations.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#0A2463] mr-2"></div>
                    <span className="text-gray-700">4 Undergraduate Programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#4DA8DA] mr-2"></div>
                    <span className="text-gray-700">6 Postgraduate Programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#59C3C3] mr-2"></div>
                    <span className="text-gray-700">Multiple Doctoral Specializations</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={programStats}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#0A2463', fontWeight: 500 }}
                        axisLine={{ stroke: '#e2e8f0' }}
                        tickLine={false}
                      />
                      <YAxis 
                        yAxisId="left" 
                        orientation="left" 
                        stroke="#0A2463"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b' }}
                        tickFormatter={(value) => `${value}`}
                      />
                      <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        stroke="#4DA8DA"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white',
                          borderRadius: '0.5rem',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        cursor={{ fill: 'rgba(236, 240, 243, 0.3)' }}
                        formatter={(value, name) => [`${value} ${name === "Students" ? "Students" : "Departments"}`, name]}
                        labelStyle={{ color: '#0A2463', fontWeight: 'bold' }}
                      />
                      <Legend 
                        wrapperStyle={{ paddingTop: '15px' }}
                        iconType="circle"
                        iconSize={8}
                      />
                      <Bar 
                        yAxisId="left" 
                        dataKey="students" 
                        name="Students" 
                        fill="#0A2463" 
                        radius={[8, 8, 0, 0]} 
                        barSize={38}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      />
                      <Bar 
                        yAxisId="right" 
                        dataKey="departments" 
                        name="Departments" 
                        fill="#4DA8DA" 
                        radius={[8, 8, 0, 0]} 
                        barSize={38}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#0A2463]">300+</p>
                <p className="text-gray-600 text-sm">Annual Graduates</p>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#4DA8DA]">18</p>
                <p className="text-gray-600 text-sm">Programs</p>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#0A2463]">95%</p>
                <p className="text-gray-600 text-sm">Placement Rate</p>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <p className="text-xl sm:text-2xl font-bold text-[#4DA8DA]">19+</p>
                <p className="text-gray-600 text-sm">Specializations</p>
              </div>
            </div>
          </motion.div>
        </div>{/* Academic Programs Section */}
      </div>      {/* Full-width section for Academic Programs */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16 mt-24 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={styles.bgGridPattern}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-4 inline-flex items-center">
              <GraduationCap className="mr-3 h-8 w-8 text-[#4DA8DA]" />
              Academic Programs
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our programs are designed to provide both theoretical knowledge and practical skills, 
              with a focus on innovation and industry relevance.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Tabs 
            defaultValue="undergraduate" 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12 bg-gray-100/80 p-1.5 rounded-xl shadow-sm border border-gray-100">
              <TabsTrigger 
                value="undergraduate" 
                className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-3 font-medium transition-all"
              >
                Undergraduate
              </TabsTrigger>
              <TabsTrigger 
                value="postgraduate"
                className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-3 font-medium transition-all"
              >
                Postgraduate
              </TabsTrigger>
              <TabsTrigger 
                value="doctoral"
                className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-3 font-medium transition-all"
              >
                Doctoral
              </TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredPrograms.map((program, index) => (
                  <Card 
                    key={index} 
                    className="border-[#4DA8DA]/20 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group hover:border-[#4DA8DA]/40 hover:translate-y-[-2px]"
                  >
                    <CardHeader className="pb-2 bg-gradient-to-r from-[#0A2463]/5 to-[#4DA8DA]/5 group-hover:from-[#0A2463]/10 group-hover:to-[#4DA8DA]/10 transition-colors">
                      <div className="flex items-start">
                        <div className="rounded-full bg-[#0A2463]/10 p-2 mr-4 group-hover:bg-[#0A2463]/20 transition-colors">
                          <BookOpen className="h-5 w-5 text-[#4DA8DA]" />
                        </div>
                        <div>
                          <CardTitle className="text-[#0A2463] text-xl leading-tight">{program.name}</CardTitle>
                          <CardDescription className="mt-2 space-y-1.5">
                            <span className="flex items-center"><Award className="h-4 w-4 mr-2 text-[#4DA8DA]" /> Duration: {program.duration}</span>
                            <span className="flex items-center"><Medal className="h-4 w-4 mr-2 text-[#4DA8DA]" /> Department: {program.department}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 leading-relaxed">{program.description}</p>
                      <Badge className="mt-4 bg-[#4DA8DA]/10 text-[#0A2463] hover:bg-[#4DA8DA]/20 border-none">Learn More</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">        {/* Academic Highlights */}
        <div className="pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 bg-[#0A2463]/5 rounded-full mb-4">
              <BarChart3 className="h-7 w-7 text-[#4DA8DA]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-4">
              Academic Highlights
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our commitment to excellence spans across faculty expertise, research achievements, and institutional recognition.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/5 via-transparent to-[#4DA8DA]/5 opacity-30 rounded-2xl" style={{ zIndex: -1 }}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl"
            >
              <Card className="border-[#4DA8DA]/20 hover:shadow-xl transition-all duration-300 bg-white group hover:border-[#4DA8DA]/40 hover:translate-y-[-2px]">
                <div className="absolute top-0 right-0 m-4">
                  <Badge className="bg-[#0A2463] text-white border-none">Distinguished</Badge>
                </div>
                <CardHeader className="pb-2 bg-gradient-to-r from-[#0A2463]/5 to-transparent group-hover:from-[#0A2463]/10 transition-colors pt-8">
                  <div className="w-12 h-12 bg-[#0A2463]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#0A2463]/15 transition-colors">
                    <BookOpen className="h-6 w-6 text-[#4DA8DA]" />
                  </div>
                  <CardTitle className="text-[#0A2463] text-xl">Faculty Expertise</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">80+ faculty members with expertise in various domains</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">40+ professors with doctoral degrees from prestigious institutions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">Extensive industry experience and research background</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">80+ Faculty</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">40+ PhDs</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">Industry Experience</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#4DA8DA]/20 hover:shadow-xl transition-all duration-300 bg-white group hover:border-[#4DA8DA]/40 hover:translate-y-[-2px]">
                <div className="absolute top-0 right-0 m-4">
                  <Badge className="bg-[#4DA8DA] text-white border-none">Innovative</Badge>
                </div>
                <CardHeader className="pb-2 bg-gradient-to-r from-[#0A2463]/5 to-transparent group-hover:from-[#0A2463]/10 transition-colors pt-8">
                  <div className="w-12 h-12 bg-[#0A2463]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#0A2463]/15 transition-colors">
                    <Award className="h-6 w-6 text-[#4DA8DA]" />
                  </div>
                  <CardTitle className="text-[#0A2463] text-xl">Research Achievements</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">500+ research publications in prestigious journals and conferences</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">45+ patents filed in cutting-edge technology domains</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">Significant research grants from government and industry partners</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">500+ Publications</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">45+ Patents</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">Research Grants</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#4DA8DA]/20 hover:shadow-xl transition-all duration-300 bg-white group hover:border-[#4DA8DA]/40 hover:translate-y-[-2px]">
                <div className="absolute top-0 right-0 m-4">
                  <Badge className="bg-gradient-to-r from-[#0A2463] to-[#4DA8DA] text-white border-none">Recognized</Badge>
                </div>
                <CardHeader className="pb-2 bg-gradient-to-r from-[#0A2463]/5 to-transparent group-hover:from-[#0A2463]/10 transition-colors pt-8">
                  <div className="w-12 h-12 bg-[#0A2463]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#0A2463]/15 transition-colors">
                    <Medal className="h-6 w-6 text-[#4DA8DA]" />
                  </div>
                  <CardTitle className="text-[#0A2463] text-xl">Accreditations & Rankings</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">NAAC A+ accreditation for institutional excellence</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">Consistently high rankings in NIRF frameworks</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 mr-3"></div>
                      <p className="text-gray-600">NBA accredited programs ensuring quality education</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">NAAC A+</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">NIRF Ranked</Badge>
                    <Badge variant="outline" className="bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition-colors">NBA Accredited</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-[#0A2463] font-medium mb-4">
              Recognized by leading national and international educational bodies
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
              <div className="grayscale hover:grayscale-0 transition-all hover:opacity-100">
                <img src="/images/naac-logo.png" alt="NAAC Logo" className="h-12 w-auto" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all hover:opacity-100">
                <img src="/images/nirf-logo.png" alt="NIRF Logo" className="h-12 w-auto" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all hover:opacity-100">
                <img src="/images/nba-logo.png" alt="NBA Logo" className="h-12 w-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
