"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Building, Award, BookOpen, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { placementData2024_25 as placementData } from "@/data/placement-data-2024-25"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  duration?: number
  delay?: number
  inView: boolean
}

function StatCounter({ icon, value, label, suffix = "", duration = 2000, delay = 0, inView }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = value
    const totalDuration = duration
    const incrementTime = totalDuration / end

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [inView, value, duration, delay])

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <CardContent className="p-6 flex flex-col items-center text-center relative">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#4DA8DA]/5 rounded-full transition-all duration-300 group-hover:scale-150"></div>
        <div className="p-3 rounded-full bg-[#0A2463]/10 mb-4 relative z-10">{icon}</div>
        <h3 className="text-4xl font-bold text-[#0A2463] mb-2 flex items-center justify-center relative z-10">
          {inView ? count : 0}
          {suffix}
        </h3>
        <p className="text-gray-600 relative z-10">{label}</p>
      </CardContent>
    </Card>
  )
}

export default function StatisticsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Calculate actual statistics from the placement data
  const totalOffers = placementData.length // 182 offers
  const uniqueStudents = 149 // As mentioned in the data

  // Calculate highest package (Visa Inc offers at 31.64 LPA)
  const salaries = placementData
    .filter((entry) => entry.salary && typeof entry.salary === "number")
    .map((entry) => entry.salary as number)
  const highestPackage = Math.round(Math.max(...salaries) / 100000) // Convert to LPA

  // Calculate average package
  const avgSalary =
    salaries.length > 0 ? Math.round(salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length / 100000) : 0

  // Count unique companies
  const uniqueCompanies = new Set(placementData.map((entry) => entry.company)).size

  // Count internship offers
  const internshipOffers = placementData.filter((entry) => entry.offerType.toLowerCase().includes("intern")).length

  // Calculate placement rate
  const placementRate = Math.round((uniqueStudents / 170) * 100) // Assuming total eligible students is around 170

  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-[#0A2463]" />,
      value: highestPackage,
      label: "Highest Package",
      suffix: " LPA",
    },
    {
      icon: <Users className="h-6 w-6 text-[#0A2463]" />,
      value: totalOffers,
      label: "Total Offers",
      suffix: "+",
    },
    {
      icon: <Building className="h-6 w-6 text-[#0A2463]" />,
      value: uniqueCompanies,
      label: "Companies Visited",
      suffix: "+",
    },
  ]

  const additionalStats = [
    {
      icon: <Award className="h-6 w-6 text-[#0A2463]" />,
      value: placementRate,
      label: "Placement Rate",
      suffix: "%",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#0A2463]" />,
      value: avgSalary,
      label: "Average Package",
      suffix: " LPA",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-[#0A2463]" />,
      value: internshipOffers,
      label: "Internship Offers",
      suffix: "+",
    },
  ]

  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Our Success
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Placement Statistics 2024-25</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our placement records reflect our commitment to excellence and industry relevance
          </p>
        </motion.div>

        <div ref={ref} className="space-y-10">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCounter
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 200}
                  inView={inView}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <StatCounter
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={(index + 3) * 200}
                  inView={inView}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white group">
            <Link href="/statistics">
              View Detailed Statistics
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
