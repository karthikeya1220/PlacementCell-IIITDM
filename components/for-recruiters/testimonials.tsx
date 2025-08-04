"use client"
import { motion } from "framer-motion"
import { testimonials } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

export default function Testimonials() {
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
            Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">What Recruiters Say</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Hear from companies that have recruited our students and experienced the IIITDM difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-[#4DA8DA]/20 hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-[#4DA8DA] opacity-50" />
                      </div>
                      <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.testimonial}"</p>
                      <div className="flex items-center mt-auto">
                        <div className="flex-shrink-0 mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0A2463]">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                          <p className="text-xs text-[#4DA8DA]">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Join Our Recruiter Network</h3>
              <p className="mb-6 text-gray-200">
                Become a part of IIITDM Kancheepuram's recruiter network and gain access to top-tier talent,
                collaborative research opportunities, and industry-academia partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#0A2463] hover:bg-gray-100 px-6 py-2 rounded-md font-medium transition-colors">
                  Register as Recruiter
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-2 rounded-md font-medium transition-colors">
                  Contact Placement Cell
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-white">100+</h4>
                <p className="text-sm text-gray-200">Active Recruiters</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-white">85%</h4>
                <p className="text-sm text-gray-200">Returning Companies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-white">90%</h4>
                <p className="text-sm text-gray-200">Satisfaction Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-white">15+</h4>
                <p className="text-sm text-gray-200">Industry Partnerships</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
