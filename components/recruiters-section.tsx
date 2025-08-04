"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

// Use all images from the 'past recruiters' folder and fix the path for Next.js public assets
const companyLogos = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
  "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
  "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png"
]

const companies = companyLogos.map((logo, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  // Images should be placed in /public/past recruiters/ for Next.js static serving
  logo: `/past recruiters/${logo}`,
  tier: i < 5 ? "platinum" : i < 10 ? "gold" : "silver",
}))

export default function RecruitersSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="recruiters" className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Our Past Recruiters</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We're proud to partner with leading companies across various industries. Our students have been placed in
            prestigious organizations that value innovation, excellence, and technical expertise.
          </p>
        </motion.div>

        {/* Company logos scrolling section */}
        <div className="relative overflow-hidden" ref={ref}>
          <div className="flex space-x-8 animate-scroll">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
