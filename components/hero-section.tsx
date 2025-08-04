"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ArrowRight,
  Users,
  Building,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ChevronDown,
} from "lucide-react"

// Use a subset of alumni testimonials for hero section
// const testimonials = alumniTestimonials.slice(5, 8).map(alumni => ({
//   quote: alumni.testimonial.substring(0, 120) + "...", // Truncate for hero section
//   name: alumni.name,
//   role: `${alumni.department}, Placed at ${alumni.company}`,
//   image: alumni.image,
// }))

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Slides data with actual placement statistics
  const slides = [
    {
      title: "Shaping Future Tech Leaders",
      subtitle: "Connecting talent with opportunity at IIITDM Kancheepuram",
      description:
        "Our placement cell bridges the gap between academia and industry, helping students launch successful careers with leading companies worldwide.",
      image: "/campus-main.png",
      stats: [
        { icon: <Users className="h-5 w-5" />, value: "149+", label: "Students Placed" },
        { icon: <Building className="h-5 w-5" />, value: "50+", label: "Recruiting Companies" },
        { icon: <Award className="h-5 w-5" />, value: "31.6 LPA", label: "Highest Package" },
        { icon: <TrendingUp className="h-5 w-5" />, value: "92%", label: "Placement Rate" },
      ],
    },
    {
      title: "Industry Partnerships",
      subtitle: "Collaborating with leading companies for innovative solutions",
      description:
        "We've built strong relationships with industry leaders like Visa, Amazon, AMD, and many more to provide exceptional opportunities for our students.",
      image: "/industry-partners.png",
      stats: [
        { icon: <Briefcase className="h-5 w-5" />, value: "182", label: "Total Offers" },
        { icon: <Building className="h-5 w-5" />, value: "15+", label: "Fortune 500 Companies" },
        { icon: <GraduationCap className="h-5 w-5" />, value: "25+", label: "Industry Sectors" },
        { icon: <TrendingUp className="h-5 w-5" />, value: "8.5 LPA", label: "Average Package" },
      ],
    },
  ]

  // Top companies based on the PDF data
  // const topCompanies = [
  //   { name: "Visa Inc", logo: "/past recruiters/3.png" },
  //   { name: "Amazon", logo: "/past recruiters/4.png" },
  //   { name: "AMD", logo: "/past recruiters/5.png" },
  //   { name: "Accenture", logo: "/past recruiters/6.png" },
  //   { name: "Academor", logo: "/past recruiters/7.png" },
  //   { name: "Mbit Wireless", logo: "/past recruiters/8.png" },
  // ]

  useEffect(() => {
    setIsVisible(true)
    
    // Slide transition
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    
    return () => {
      clearInterval(slideInterval)
    }
  }, [slides.length])

  // Scroll to stats
  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden text-white min-h-screen"
    >
      {/* Professional gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#1A3A8A] to-[#1E4598] z-0"></div>
      
      {/* Modern subtle pattern overlay */}
      <div className="absolute inset-0 opacity-8 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Refined accent light effects */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"></div>
      
      {/* Background Image with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 z-0 ${
            currentSlide === index ? "opacity-15" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 pt-16 pb-20 md:py-24 relative z-10 flex flex-col items-center min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto">
          
          {/* Header Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
              <span className="text-secondary">•</span> Placement Season 2024-25
            </span>
          </motion.div>
          
          {/* Main Heading with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center mb-8 max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12 max-w-2xl"
          >
            <p className="text-base md:text-lg text-gray-300">
              {slides[currentSlide].description}
            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#4DA8DA] to-[#3a8bb8] hover:from-[#3a8bb8] hover:to-[#4DA8DA] text-white transition-all duration-500 shadow-xl hover:shadow-2xl rounded-xl px-8 py-4 h-auto text-lg font-semibold group transform hover:scale-105 border-0 min-w-[200px]"
              >
                <Link href="/faqs-schedule">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    <span>For Students</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-[#0A2463] transition-all duration-500 shadow-xl hover:shadow-2xl rounded-xl px-8 py-4 h-auto text-lg font-semibold group transform hover:scale-105 backdrop-blur-md bg-white/10 min-w-[200px]"
              >
                <Link href="/why-iiitdm">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    <span>For Recruiters</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Button>
            </div>
            
            {/* Secondary Action Link */}
            <Link
              href="/statistics"
              className="group flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 text-base font-medium px-6 py-3 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              <TrendingUp className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>View Placement Statistics</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          {/* Scroll down indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
            onClick={scrollToStats}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 group-hover:border-white/40 transition-all duration-300">
              <span className="text-sm text-white/80 group-hover:text-white transition-colors">Explore Statistics</span>
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="mt-2"
            >
              <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats and Info Section */}
        <div ref={statsRef} className="w-full max-w-7xl mx-auto pt-24">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {slides[currentSlide].stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/30"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 text-secondary">
                    {stat.icon}
                  </div>
                  <div className="ml-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}      <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 hidden lg:flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-secondary" : "bg-white/30 hover:bg-white/50 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Mobile Slide Indicators */}
      <div className="absolute bottom-28 left-0 right-0 z-20 flex lg:hidden justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-secondary" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
