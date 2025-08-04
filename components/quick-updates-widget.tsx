"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  ChevronRight, 
  Calendar, 
  Building, 
  Users, 
  AlertCircle,
  TrendingUp,
  ExternalLink
} from "lucide-react"

interface QuickUpdate {
  id: string
  title: string
  description: string
  type: "urgent" | "info" | "success"
  date: string
  link?: string
  icon?: "placement" | "internship" | "deadline" | "announcement"
}

const quickUpdates: QuickUpdate[] = [
  {
    id: "1",
    title: "Amazon Drive This Week",
    description: "Recruitment starts Aug 15. Registration closes Aug 10.",
    type: "urgent",
    date: "Aug 4",
    icon: "placement",
    link: "/placement-procedure"
  },
  {
    id: "2", 
    title: "ERF Form Updated",
    description: "New enhanced form available for 2024-25 season.",
    type: "info",
    date: "Aug 1",
    icon: "announcement",
    link: "/placement-procedure#erf"
  },
  {
    id: "3",
    title: "Microsoft PPT Tomorrow",
    description: "Pre-placement talk at 2 PM in Auditorium.",
    type: "info", 
    date: "Aug 7",
    icon: "announcement"
  },
  {
    id: "4",
    title: "Visa Results Out",
    description: "4 students selected with packages up to ₹31.64 LPA.",
    type: "success",
    date: "Jul 30",
    icon: "placement"
  }
]

export default function QuickUpdatesWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeUpdate, setActiveUpdate] = useState(0)

  const getTypeConfig = (type: QuickUpdate["type"]) => {
    switch (type) {
      case "urgent":
        return {
          bgColor: "bg-red-50",
          borderColor: "border-red-200", 
          textColor: "text-red-800",
          badgeColor: "bg-red-100 text-red-800"
        }
      case "success":
        return {
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800", 
          badgeColor: "bg-green-100 text-green-800"
        }
      default:
        return {
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-800",
          badgeColor: "bg-blue-100 text-blue-800"
        }
    }
  }

  const getIconComponent = (icon?: string) => {
    switch (icon) {
      case "placement":
        return Building
      case "internship":
        return Users
      case "deadline":
        return AlertCircle
      case "announcement":
        return TrendingUp
      default:
        return Bell
    }
  }

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-[#0A2463] flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#4DA8DA]/10">
              <Bell className="h-4 w-4 text-[#4DA8DA]" />
            </div>
            Quick Updates
          </CardTitle>
          <Badge className="bg-[#4DA8DA] text-white text-xs">
            {quickUpdates.filter(u => u.type === "urgent").length} Urgent
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <AnimatePresence mode="wait">
          {(isExpanded ? quickUpdates : quickUpdates.slice(0, 2)).map((update, index) => {
            const config = getTypeConfig(update.type)
            const IconComponent = getIconComponent(update.icon)
            
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${config.bgColor} ${config.borderColor} hover:shadow-md transition-all duration-200 group cursor-pointer`}
                onClick={() => update.link && window.open(update.link, '_self')}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <IconComponent className={`h-4 w-4 ${config.textColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`font-medium text-sm ${config.textColor} group-hover:underline`}>
                        {update.title}
                      </h4>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {update.description}
                    </p>
                    {update.link && (
                      <div className="flex items-center gap-1 text-xs text-[#4DA8DA] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View Details</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-[#0A2463] hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors"
        >
          <span className="text-sm">
            {isExpanded ? "Show Less" : `View All ${quickUpdates.length} Updates`}
          </span>
          <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </Button>

        {/* View All Updates Link */}
        <Button
          asChild
          className="w-full bg-[#0A2463] hover:bg-[#4DA8DA] text-white"
          size="sm"
        >
          <a href="/#updates" className="flex items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4" />
            All Updates
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
