"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { statistics } from "@/data/placement-data-2024-25"

export default function StatisticsHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6">
            Academic Year 2024-2025
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Placement Statistics</h1>
          <p className="text-xl text-gray-300 mb-10">
            Explore our placement records and see how our students are making their mark in the industry
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{statistics.totalOffers}</p>
              <p className="text-gray-300">Total Offers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">149</p>
              <p className="text-gray-300">Unique Placements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">31.64</p>
              <p className="text-gray-300">Highest CTC (LPA)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">9.46</p>
              <p className="text-gray-300">Average CTC (LPA)</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
              Download Placement Brochure <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Detailed Statistics <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
