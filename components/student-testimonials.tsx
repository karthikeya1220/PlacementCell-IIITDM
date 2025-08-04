"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote, ChevronLeft, ChevronRight, Star, Building2, GraduationCap, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { alumniTestimonials } from "@/components/for-recruiters/why-iiitdm-data"

export default function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alumniTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % alumniTestimonials.length)
    setAutoPlay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + alumniTestimonials.length) % alumniTestimonials.length)
    setAutoPlay(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#4DA8DA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A2463] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#4DA8DA] to-[#0A2463] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 mb-6">
            <Star className="h-4 w-4 text-[#4DA8DA]" />
            <span className="text-sm font-medium text-[#0A2463]">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2463] mb-6 leading-tight">
            What Our <span className="text-[#4DA8DA]">Alumni</span> Say
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful graduates who have made their mark in leading companies worldwide. 
            Their journeys inspire and showcase the impact of IIITDM education.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
                      {/* Quote Section */}
                      <div className="md:col-span-3 p-6 md:p-12 order-2 md:order-1 relative">
                        {/* Background pattern */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#4DA8DA]/10 to-[#0A2463]/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-3 mb-4 md:mb-6">
                            <Quote className="h-8 md:h-12 w-8 md:w-12 text-[#4DA8DA] flex-shrink-0 opacity-80" />
                            <div className="flex-1">
                              <blockquote className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium italic relative">
                                <span className="relative z-10">"{alumniTestimonials[currentIndex].testimonial}"</span>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4DA8DA]/20 to-transparent rounded-full"></div>
                              </blockquote>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                            <Badge variant="secondary" className="bg-[#0A2463] text-white hover:bg-[#0A2463]/90 text-xs px-3 py-1 rounded-full">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              {alumniTestimonials[currentIndex].department}
                            </Badge>
                            <Badge variant="outline" className="border-[#4DA8DA] text-[#4DA8DA] text-xs px-3 py-1 rounded-full bg-[#4DA8DA]/5">
                              Batch: {alumniTestimonials[currentIndex].batch}
                            </Badge>
                            <Badge variant="outline" className="border-green-500 text-green-600 text-xs px-3 py-1 rounded-full bg-green-50">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              Success Story
                            </Badge>
                          </div>

                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="relative">
                              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden border-2 border-[#4DA8DA] shadow-lg bg-gradient-to-br from-[#4DA8DA] to-[#0A2463]">
                                {alumniTestimonials[currentIndex].image ? (
                                  <img
                                    src={alumniTestimonials[currentIndex].image}
                                    alt={`${alumniTestimonials[currentIndex].name} - ${alumniTestimonials[currentIndex].company}`}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                      // Fallback to initials if image fails to load
                                      e.currentTarget.style.display = 'none';
                                      const fallback = e.currentTarget.nextElementSibling as HTMLDivElement;
                                      if (fallback) fallback.style.display = 'flex';
                                    }}
                                  />
                                ) : null}
                                <div className="h-full w-full flex items-center justify-center text-white font-bold text-lg md:text-xl" style={{ display: alumniTestimonials[currentIndex].image ? 'none' : 'flex' }}>
                                  {alumniTestimonials[currentIndex].name.charAt(0)}
                                </div>
                              </div>
                              <div className="absolute -bottom-1 -right-1 h-5 w-5 md:h-6 md:w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                <div className="h-2 w-2 md:h-3 md:w-3 bg-white rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-[#0A2463] text-base md:text-lg mb-1">
                                {alumniTestimonials[currentIndex].name}
                              </h4>
                              <p className="text-gray-600 text-xs md:text-sm font-medium">
                                {alumniTestimonials[currentIndex].currentRole}
                              </p>
                              <p className="text-[#4DA8DA] text-xs font-medium">
                                {alumniTestimonials[currentIndex].batch}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Company/Achievement Section */}
                      <div className="md:col-span-2 bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] p-6 md:p-12 text-white flex flex-col justify-center order-1 md:order-2 relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4DA8DA]/20 rounded-full blur-xl"></div>
                        
                        <div className="text-center relative z-10">
                          {/* Company Logo Placeholder */}
                          <div className="mx-auto mb-4 md:mb-6 relative">
                            <div className="h-16 w-16 md:h-20 md:w-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3">
                              <Building2 className="h-8 w-8 md:h-10 md:w-10 text-[#0A2463]" />
                            </div>
                            <div className="absolute -top-2 -right-2 h-6 w-6 bg-[#4DA8DA] rounded-full flex items-center justify-center">
                              <Star className="h-3 w-3 text-white fill-current" />
                            </div>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            {alumniTestimonials[currentIndex].company}
                          </h3>
                          
                          <p className="text-blue-200 mb-4 md:mb-6 text-sm md:text-base font-medium">
                            {alumniTestimonials[currentIndex].currentRole}
                          </p>

                          <div className="space-y-3">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                              <div className="text-xs text-blue-200 mb-1 uppercase tracking-wide">Alumni Journey</div>
                              <div className="text-xs md:text-sm font-semibold flex items-center justify-center gap-2">
                                <GraduationCap className="h-4 w-4" />
                                IIITDM → Industry Leader
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-[#4DA8DA]/20 to-blue-500/20 rounded-xl p-3 border border-[#4DA8DA]/30">
                              <div className="text-xs text-blue-200 mb-1 uppercase tracking-wide">Department</div>
                              <div className="text-xs md:text-sm font-semibold">
                                {alumniTestimonials[currentIndex].department}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 z-10">
              <Button
                onClick={prevTestimonial}
                size="icon"
                variant="outline"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/95 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-[#4DA8DA] hover:text-[#4DA8DA] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-4 z-10">
              <Button
                onClick={nextTestimonial}
                size="icon"
                variant="outline"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/95 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-[#4DA8DA] hover:text-[#4DA8DA] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-3 mb-12"
        >
          {alumniTestimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`group relative transition-all duration-300 ${
                index === currentIndex 
                  ? "w-12 h-3" 
                  : "w-3 h-3 hover:w-6"
              }`}
              aria-label={`Go to testimonial ${index + 1} - ${testimonial.name}`}
            >
              <div className={`w-full h-full rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-gradient-to-r from-[#4DA8DA] to-[#0A2463] shadow-lg" 
                  : "bg-gray-300 hover:bg-[#4DA8DA]/60 group-hover:shadow-md"
              }`} />
              
              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {testimonial.name} - {testimonial.company}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "500+", label: "Alumni Placed", icon: GraduationCap, color: "from-blue-500 to-blue-600" },
            { value: "100+", label: "Top Companies", icon: Building2, color: "from-purple-500 to-purple-600" },
            { value: "95%", label: "Satisfaction Rate", icon: Star, color: "from-green-500 to-green-600" },
            { value: "₹32 LPA", label: "Highest Package", icon: TrendingUp, color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`h-12 w-12 md:h-14 md:w-14 mx-auto mb-3 md:mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2463] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0A2463] group-hover:to-[#4DA8DA] group-hover:bg-clip-text transition-all duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Join our alumni network and be part of IIITDM's legacy of excellence. 
              Your journey to success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#0A2463] hover:bg-gray-100 font-semibold px-8"
              >
                Explore Programs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                Connect with Alumni
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
