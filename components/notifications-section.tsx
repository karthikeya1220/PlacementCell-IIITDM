"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Calendar, Building, Users, Award, Filter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { placementData2024_25 as placementData } from "@/data/placement-data-2024-25"
import UpdateCard from "@/components/update-card"

// Generate notifications from actual placement data
const generateNotifications = () => {
  // Get top companies by salary
  const topCompanies = [...placementData]
    .filter((entry) => entry.salary && typeof entry.salary === "number")
    .sort((a, b) => (b.salary as number) - (a.salary as number))
    .slice(0, 5)

  // Get recent internship offers
  const internships = [...placementData].filter((entry) => entry.offerType.toLowerCase().includes("intern")).slice(0, 3)

  // Get companies with multiple offers
  const companyOffers = placementData.reduce(
    (acc, entry) => {
      if (!acc[entry.company]) {
        acc[entry.company] = 0
      }
      acc[entry.company]++
      return acc
    },
    {} as Record<string, number>,
  )

  const multipleOffers = Object.entries(companyOffers)
    .filter(([_, count]) => count > 5)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([company, count]) => ({ company, count }))

  const notifications = [
    // Top salary offers
    ...topCompanies.map((entry, index) => ({
      id: index + 1,
      title: `${entry.company} offers package of ${((entry.salary as number) / 100000).toFixed(2)} LPA`,
      date: `May ${15 - index}, 2024`,
      company: entry.company,
      category: "Placement",
      students: 1,
      isNew: index < 2,
      description: `${entry.company} has offered a package of ₹${((entry.salary as number) / 100000).toFixed(2)} LPA for ${entry.department} students.`,
    })),

    // Multiple offers from same company
    ...multipleOffers.map((item, index) => ({
      id: 6 + index,
      title: `${item.company} recruits ${item.count} students`,
      date: `April ${20 - index * 5}, 2024`,
      company: item.company,
      category: "Placement",
      students: item.count,
      isNew: false,
      description: `${item.company} has recruited ${item.count} students across various departments.`,
    })),

    // Internship offers
    ...internships.map((entry, index) => ({
      id: 9 + index,
      title: `${entry.company} selects students for internship`,
      date: `April ${10 - index * 3}, 2024`,
      company: entry.company,
      category: "Internship",
      students: 1,
      isNew: false,
      description: `${entry.company} is offering internship opportunities with ${entry.stipend ? `a stipend of ₹${entry.stipend}` : "competitive compensation"}.`,
    })),

    // Upcoming drives
    {
      id: 12,
      title: "Amazon placement drive scheduled for next week",
      date: "March 28, 2024",
      company: "Amazon",
      category: "Drive",
      students: 0,
      isNew: false,
      description:
        "Amazon will be conducting their placement drive next week. Eligible students are requested to register.",
    },
    {
      id: 13,
      title: "Microsoft pre-placement talk on April 5th",
      date: "March 25, 2024",
      company: "Microsoft",
      category: "Drive",
      students: 0,
      isNew: false,
      description:
        "Microsoft will be conducting a pre-placement talk on April 5th. All interested students are invited to attend.",
    },
  ]

  return notifications
}

const notifications = generateNotifications()

export default function NotificationsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.category.toLowerCase() === activeTab.toLowerCase())

  const showAll = () => {
    setVisibleCount(notifications.length)
  }

  // Get recent highlights
  const recentHighlights = notifications.slice(0, 3)
  const stats = {
    totalOffers: notifications.filter(n => n.category === "Placement").length,
    topPackage: "31.64 LPA",
    companiesVisited: new Set(notifications.map(n => n.company)).size
  }

  return (
    <section id="updates" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px] opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4DA8DA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Quick Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA8DA]/10 to-[#0A2463]/10 text-[#0A2463] rounded-full text-sm font-medium mb-6 border border-[#4DA8DA]/20">
            <div className="w-2 h-2 bg-[#4DA8DA] rounded-full animate-pulse" />
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            Placement Updates 2024-25
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest placement activities, achievements, and opportunities
          </p>

          {/* Quick Stats */}
          {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-[#0A2463]">{stats.totalOffers}</div>
              <div className="text-sm text-gray-600">Active Updates</div>
            </div>
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-[#4DA8DA]">{stats.topPackage}</div>
              <div className="text-sm text-gray-600">Highest Package</div>
            </div>
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-[#0A2463]">{stats.companiesVisited}+</div>
              <div className="text-sm text-gray-600">Companies</div>
            </div>
          </div> */}
        {/* </motion.div> */} 

        {/* Featured Highlights */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-[#0A2463] mb-6 text-center">Featured Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${
                    highlight.category === "Placement" ? "bg-green-100 text-green-800" :
                    highlight.category === "Internship" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  } border-0`}>
                    {highlight.category}
                  </Badge>
                  {highlight.isNew && (
                    <div className="w-2 h-2 bg-[#4DA8DA] rounded-full animate-pulse" />
                  )}
                </div>
                <h4 className="font-bold text-[#0A2463] mb-2 group-hover:text-[#4DA8DA] transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{highlight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Building className="h-3 w-3" />
                    <span>{highlight.company}</span>
                  </div>
                  <div className="text-xs text-gray-500">{highlight.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Filter tabs */}
        {/* <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#4DA8DA]" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="placement"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
              >
                Placement
              </TabsTrigger>
              <TabsTrigger
                value="internship"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
              >
                Internship
              </TabsTrigger>
              <TabsTrigger
                value="drive"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
              >
                Drive
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div ref={ref} className="max-w-6xl mx-auto">
              {/* Enhanced Grid Layout */}
              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotifications.slice(0, visibleCount).map((notification, index) => (
                  <UpdateCard
                    key={notification.id}
                    update={{
                      id: notification.id,
                      title: notification.title,
                      description: notification.description,
                      date: notification.date,
                      company: notification.company,
                      category: notification.category,
                      students: notification.students,
                      isNew: notification.isNew,
                      priority: notification.isNew ? "high" : "medium",
                      actionLink: "#",
                      actionText: "Learn More"
                    }}
                    index={index}
                  />
                ))}
              </div> */}

              {/* {visibleCount < filteredNotifications.length && (
                <div className="text-center mt-10">
                  <Button onClick={showAll} className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">
                    View All Updates
                  </Button>
                </div>
              )}
            </div>
          </TabsContent> */}
        {/* </Tabs> */}
      </div>
    </section>
  )
}
