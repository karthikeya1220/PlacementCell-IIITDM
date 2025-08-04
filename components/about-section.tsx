"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronRight, Award, BookOpen, Users, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"

// Images for the carousel
const carouselImages = [
  {
    src: "/placeholder-sc89g.png",
    alt: "IIITDM Campus Building",
  },
  {
    src: "/diverse-students-classroom.png",
    alt: "Students in Classroom",
  },
  {
    src: "/placeholder-3s793.png",
    alt: "Placement Interview",
  },
]

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Handle manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="about" className="pt-16 pb-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6 leading-tight">
              Bridging Academia and Industry with Excellence
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Training and Placement Cell at IIITDM Kancheepuram serves as a bridge between the academic environment
              and the professional world. Our mission is to facilitate the seamless transition of our students into the
              industry by providing comprehensive training and placement services.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Excellence</h3>
                  <p className="text-sm text-gray-600">Committed to highest standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">Fostering creative solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Collaboration</h3>
                  <p className="text-sm text-gray-600">Building strong partnerships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Opportunity</h3>
                  <p className="text-sm text-gray-600">Creating pathways to success</p>
                </div>
              </div>
            </div>

            <Button className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
              Learn More About Us
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-2 relative"
          >
            {/* Image Carousel */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1,
                  }}
                  transition={{
                    opacity: { duration: 0.7 },
                    scale: { duration: 1.5 },
                  }}
                  className="absolute inset-0"
                  style={{ zIndex: currentImageIndex === index ? 1 : 0 }}
                >
                  <Image
                    src={"/college.png"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/30 to-transparent"></div>
                </motion.div>
              ))}

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <h4 className="font-medium text-[#0A2463]">IIITDM COLLEGE CAMPUS</h4>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImageIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4DA8DA]/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4DA8DA]/10 rounded-full z-0"></div>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-32 bg-[#4DA8DA]/20 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
