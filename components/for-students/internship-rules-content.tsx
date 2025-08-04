"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  UserCheck,
  Users,
  Clock,
  Shirt,
  FileText,
  Files,
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { internshipRules } from "./rules-data"

export default function InternshipRulesContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6 text-[#4DA8DA]" />
      case "UserCheck":
        return <UserCheck className="h-6 w-6 text-[#4DA8DA]" />
      case "Users":
        return <Users className="h-6 w-6 text-[#4DA8DA]" />
      case "Clock":
        return <Clock className="h-6 w-6 text-[#4DA8DA]" />
      case "Shirt":
        return <Shirt className="h-6 w-6 text-[#4DA8DA]" />
      case "FileText":
        return <FileText className="h-6 w-6 text-[#4DA8DA]" />
      case "Files":
        return <Files className="h-6 w-6 text-[#4DA8DA]" />
      case "Calendar":
        return <Calendar className="h-6 w-6 text-[#4DA8DA]" />
      case "Award":
        return <Award className="h-6 w-6 text-[#4DA8DA]" />
      default:
        return <CheckCircle className="h-6 w-6 text-[#4DA8DA]" />
    }
  }

  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
    }
  }

  // Filter rules based on search query
  const filteredRules = searchQuery
    ? internshipRules.filter(
        (rule) =>
          rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rule.points.some((point) => point.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : internshipRules

  return (    <section id="rules" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Guidelines
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Internship Rules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These rules are designed to ensure a fair and transparent internship process for all students
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search rules..."
              className="pl-10 border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Rules accordion */}
          <div className="space-y-6">
            {filteredRules.map((rule, index) => (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 ${activeCategory === rule.id ? "shadow-lg" : "shadow-md"}`}
                >
                  <div
                    className={`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 ${activeCategory === rule.id ? "bg-gray-50 border-b" : ""}`}
                    onClick={() => toggleCategory(rule.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#4DA8DA]/10">{getIcon(rule.icon)}</div>
                      <div>
                        <h3 className="font-bold text-[#0A2463]">{rule.category}</h3>
                        <p className="text-gray-600 text-sm">{rule.title}</p>
                      </div>
                    </div>
                    <div>
                      {activeCategory === rule.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {activeCategory === rule.id && (
                    <CardContent className="p-6 bg-white">
                      <p className="text-gray-700 mb-4">{rule.description}</p>
                      <ol className="space-y-3 list-decimal pl-5">
                        {rule.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                            className="flex items-start gap-3 mb-3"
                          >
                            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#4DA8DA]/10 text-[#4DA8DA] font-medium text-sm flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{point}</span>
                          </motion.li>
                        ))}
                      </ol>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}

            {filteredRules.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Rules Found</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
