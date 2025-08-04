"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Monitor, Users, Laptop, UserPlus, Video, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Facility data
const facilities = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    icon: <Monitor className="h-6 w-6" />,
    description:
      "Our smart lecture halls come with the best technology and provide a conducive atmosphere for dynamic and focused discussions between the speakers and the audience.",
    features: [
      "Interactive digital whiteboards",
      "High-definition projectors",
      "Advanced audio systems",
      "Comfortable seating for 100+ attendees",
      "Climate-controlled environment",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Smart+Classroom",
  },
  {
    id: "interview-rooms",
    title: "Interview Rooms & GD Halls",
    icon: <Users className="h-6 w-6" />,
    description:
      "Dedicated spaces designed for conducting interviews and group discussions in a professional setting with all necessary amenities.",
    features: [
      "Private interview cabins",
      "Soundproof discussion rooms",
      "Configurable seating arrangements",
      "Digital presentation facilities",
      "Refreshment services available",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Interview+Rooms",
  },
  {
    id: "computer-labs",
    title: "Computer Labs",
    icon: <Laptop className="h-6 w-6" />,
    description:
      "State-of-the-art computer laboratories equipped with the latest hardware and software to facilitate online assessments and technical evaluations.",
    features: [
      "High-performance workstations",
      "Latest software and development tools",
      "High-speed internet connectivity",
      "Technical support staff",
      "Capacity for simultaneous testing of 200+ students",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Computer+Labs",
  },
  {
    id: "placement-volunteers",
    title: "Student Placement Volunteers",
    icon: <UserPlus className="h-6 w-6" />,
    description:
      "Our dedicated team of student volunteers assists throughout the recruitment process, ensuring smooth coordination between companies and candidates.",
    features: [
      "Coordination of recruitment schedules",
      "Candidate management",
      "Company hospitality services",
      "Feedback collection and analysis",
      "Post-placement follow-ups",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Placement+Volunteers",
  },
  {
    id: "video-conferencing",
    title: "Video Conferencing Facilities",
    icon: <Video className="h-6 w-6" />,
    description:
      "Advanced video conferencing setup that enables remote interviews and virtual pre-placement talks with high-quality audio-visual experience.",
    features: [
      "HD video conferencing systems",
      "Multi-location connectivity",
      "Recording capabilities",
      "Screen sharing and collaborative tools",
      "Technical support during sessions",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Video+Conferencing",
  },
]

export default function FacilitiesShowcase() {
  const [activeFacility, setActiveFacility] = useState(facilities[0].id)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const selectedFacility = facilities.find((f) => f.id === activeFacility) || facilities[0]

  return (
    <section id="facilities-showcase" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Explore
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Our World-Class Facilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have various well-equipped facilities to facilitate all stages of the recruitment process. Click on any
            facility to learn more.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Facility selection sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-1">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setActiveFacility(facility.id)}
                      className={`w-full text-left p-4 transition-all duration-200 flex items-center gap-3 rounded-lg ${
                        activeFacility === facility.id ? "bg-[#0A2463] text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          activeFacility === facility.id ? "bg-white/20" : "bg-[#4DA8DA]/10"
                        }`}
                      >
                        {facility.icon}
                      </div>
                      <span className="font-medium">{facility.title}</span>
                      {activeFacility === facility.id && <ChevronRight className="ml-auto h-5 w-5" />}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-[#4DA8DA]/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">Need More Information?</h3>
              <p className="text-gray-600 mb-4">
                Contact our placement office for detailed information about our facilities or to schedule a campus
                visit.
              </p>
              <Button asChild className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Facility details */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFacility.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedFacility.image || "/placeholder.svg"}
                    alt={selectedFacility.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedFacility.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedFacility.description}</p>

                  <h4 className="text-lg font-semibold text-[#0A2463] mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedFacility.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#4DA8DA]"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex justify-end">
                    <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                      Request a Tour
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional information cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-full bg-[#4DA8DA]/10 w-fit mb-4">
                  <Monitor className="h-5 w-5 text-[#0A2463]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-2">Technology-Enabled</h3>
                <p className="text-gray-600">
                  All our facilities are equipped with the latest technology to ensure a seamless recruitment
                  experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-full bg-[#4DA8DA]/10 w-fit mb-4">
                  <Users className="h-5 w-5 text-[#0A2463]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  Our staff and student volunteers provide comprehensive support throughout the recruitment process.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-full bg-[#4DA8DA]/10 w-fit mb-4">
                  <Video className="h-5 w-5 text-[#0A2463]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-2">Remote Options</h3>
                <p className="text-gray-600">
                  We offer flexible options for remote and hybrid recruitment processes with our video conferencing
                  facilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
