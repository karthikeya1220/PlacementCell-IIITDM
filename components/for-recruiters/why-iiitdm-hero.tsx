"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function WhyIIITDMHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A2463] to-[#1E3A8A] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/80 to-[#1E3A8A]/90"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Recruit from <span className="text-[#4DA8DA]">IIITDM Kancheepuram?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Where Design Innovation Meets Technical Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white font-medium px-6">
                Download Brochure
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById("institute-overview")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black">
                  <div className="aspect-video">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      {/* This would be a video player in a real implementation */}
                      <p className="text-center p-8">Recruiter testimonial video would play here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <img
              src="/placeholder.svg?height=400&width=700"
              alt="IIITDM Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[150px]">
            <p className="text-3xl font-bold text-[#4DA8DA]">95%</p>
            <p className="text-sm mt-1">Placement Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[150px]">
            <p className="text-3xl font-bold text-[#4DA8DA]">100+</p>
            <p className="text-sm mt-1">Recruiting Partners</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[150px]">
            <p className="text-3xl font-bold text-[#4DA8DA]">12 LPA</p>
            <p className="text-sm mt-1">Average Package</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[150px]">
            <p className="text-3xl font-bold text-[#4DA8DA]">32 LPA</p>
            <p className="text-sm mt-1">Highest Package</p>
          </div>
        </motion.div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[50px] md:h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3placement-iiitdmH0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
