"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Calendar, Map, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const quickLinks = [
  {
    title: "Employer Registration",
    description: "Register your company for campus placements",
    icon: <UserPlus className="h-8 w-8 text-[#0A2463]" />,
    link: "#employer-registration",
  },
  {
    title: "Placement Calendar",
    description: "View our placement schedule and important dates",
    icon: <Calendar className="h-8 w-8 text-[#0A2463]" />,
    link: "#placement-calendar",
  },
  {
    title: "Maps & Directions",
    description: "Find your way to our campus",
    icon: <Map className="h-8 w-8 text-[#0A2463]" />,
    link: "https://www.iiitdm.ac.in/maps-and-directions/from-airport",
  },
]

export default function QuickAccess() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Quick Links
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Resources & Access</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to connect with our placement services
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#0A2463] h-full group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="p-3 rounded-full bg-[#4DA8DA]/20 mb-4 group-hover:bg-[#4DA8DA]/30 transition-colors">
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2463] mb-2 group-hover:text-[#4DA8DA] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">{link.description}</p>
                    <Button
                      asChild
                      className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white mt-auto group-hover:translate-y-[-2px] transition-transform"
                    >
                      <a href={link.link} className="flex items-center">
                        Access Now
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
