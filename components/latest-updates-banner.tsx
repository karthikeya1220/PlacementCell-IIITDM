"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, ExternalLink, Calendar, Building, Users, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Update {
  id: string
  type: "urgent" | "important" | "info"
  title: string
  message: string
  link?: string
  linkText?: string
  date: string
  isNew?: boolean
  category: "placement" | "internship" | "announcement" | "deadline" | "schedule"
}

const latestUpdates: Update[] = [
  {
    id: "erf-update",
    type: "important",
    title: "ERF Form Update",
    message: "Employer Registration Form (ERF) has been updated for the 2024-25 placement season.",
    link: "/placement-procedure#erf",
    linkText: "View Details",
    date: "2024-08-01",
    isNew: true,
    category: "announcement"
  },
  {
    id: "amazon-drive",
    type: "urgent",
    title: "Amazon Placement Drive",
    message: "Amazon recruitment drive scheduled for August 15-16, 2024. Registration deadline: August 10.",
    link: "/placement-procedure",
    linkText: "Register Now",
    date: "2024-08-04",
    isNew: true,
    category: "placement"
  },
  {
    id: "microsoft-ppt",
    type: "info",
    title: "Microsoft Pre-Placement Talk",
    message: "Join Microsoft's pre-placement talk on August 8, 2024 at 2:00 PM in the Auditorium.",
    link: "#",
    linkText: "Add to Calendar",
    date: "2024-08-04",
    isNew: true,
    category: "schedule"
  },
  {
    id: "visa-results",
    type: "info",
    title: "Visa Inc. Selection Results",
    message: "Congratulations to 4 students selected by Visa Inc. with packages up to ₹31.64 LPA.",
    date: "2024-07-30",
    category: "placement"
  },
  {
    id: "resume-deadline",
    type: "urgent",
    title: "Resume Submission Deadline",
    message: "Final deadline for resume submission to placement portal: August 5, 2024.",
    link: "/for-students",
    linkText: "Submit Resume",
    date: "2024-08-04",
    category: "deadline"
  }
]

export default function LatestUpdatesBanner() {
  const [currentUpdate, setCurrentUpdate] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-cycle through updates
  useEffect(() => {
    if (isPaused || !isVisible) return

    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % latestUpdates.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, isVisible])

  if (!isVisible) return null

  const update = latestUpdates[currentUpdate]

  const getTypeColor = (type: Update["type"]) => {
    switch (type) {
      case "urgent":
        return "bg-red-500"
      case "important":
        return "bg-orange-500"
      case "info":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryIcon = (category: Update["category"]) => {
    switch (category) {
      case "placement":
        return Building
      case "internship":
        return Users
      case "schedule":
        return Calendar
      case "deadline":
        return AlertCircle
      default:
        return Bell
    }
  }

  const CategoryIcon = getCategoryIcon(update.category)

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#0A2463] via-[#1E3A8A] to-[#0A2463] text-white py-3 shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Update indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${getTypeColor(update.type)} animate-pulse`} />
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                {update.type.toUpperCase()}
              </Badge>
              {update.isNew && (
                <Badge className="bg-[#4DA8DA] text-white text-xs animate-pulse">
                  NEW
                </Badge>
              )}
            </div>

            {/* Update content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentUpdate}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 flex-1"
              >
                <CategoryIcon className="h-5 w-5 text-[#4DA8DA] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold">{update.title}:</span>
                  <span className="ml-2 text-white/90">{update.message}</span>
                </div>
                
                {update.link && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 hover:text-white ml-2 flex-shrink-0"
                    asChild
                  >
                    <a href={update.link} className="flex items-center gap-1">
                      {update.linkText}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 ml-4">
            {/* Update indicators */}
            <div className="flex gap-1">
              {latestUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentUpdate(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentUpdate ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Close button */}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 hover:text-white p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
