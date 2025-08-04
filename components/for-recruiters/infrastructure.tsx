"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { infrastructureFacilities } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Infrastructure() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFacility = infrastructureFacilities[activeIndex]

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
            Facilities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">State-of-the-Art Infrastructure</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our campus is equipped with modern facilities and cutting-edge technology to provide students with the best
            learning environment and practical experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            {infrastructureFacilities.map((facility, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all ${
                  activeIndex === index
                    ? "border-[#4DA8DA] shadow-md bg-[#4DA8DA]/5"
                    : "border-gray-200 hover:border-[#4DA8DA]/50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <CardContent className="p-4">
                  <h3 className={`font-semibold ${activeIndex === index ? "text-[#0A2463]" : "text-gray-700"}`}>
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64 md:h-80">
                <img
                  src={activeFacility.image || "/placeholder.svg"}
                  alt={activeFacility.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#0A2463] mb-3">{activeFacility.name}</h3>
                <p className="text-gray-600 mb-6">{activeFacility.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFacility.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#4DA8DA]/20 flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-[#0A2463]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
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
          className="mt-16 bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Campus Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>51-acre green campus with modern architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>High-speed internet connectivity throughout campus</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>Dedicated spaces for startup incubation and innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>Modern sports facilities and recreational areas</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>Comfortable hostels with all necessary amenities</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Campus View 1"
                className="rounded-lg h-full w-full object-cover"
              />
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Campus View 2"
                className="rounded-lg h-full w-full object-cover"
              />
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Campus View 3"
                className="rounded-lg h-full w-full object-cover"
              />
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Campus View 4"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
