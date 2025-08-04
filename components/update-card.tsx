"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, 
  Building, 
  Users, 
  Award, 
  ExternalLink, 
  TrendingUp,
  Clock,
  MapPin,
  Mail,
  Phone
} from "lucide-react"

interface UpdateCardProps {
  update: {
    id: number
    title: string
    description: string
    date: string
    company: string
    category: string
    students?: number
    isNew?: boolean
    priority?: "high" | "medium" | "low"
    actionLink?: string
    actionText?: string
    package?: string
    location?: string
    deadline?: string
  }
  index: number
}

export default function UpdateCard({ update, index }: UpdateCardProps) {
  const getCategoryConfig = (category: string) => {
    switch (category.toLowerCase()) {
      case "placement":
        return {
          icon: Building,
          bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
          borderColor: "border-green-200",
          badgeColor: "bg-green-100 text-green-800",
          iconColor: "text-green-600"
        }
      case "internship":
        return {
          icon: Users,
          bgColor: "bg-gradient-to-br from-blue-50 to-sky-50",
          borderColor: "border-blue-200",
          badgeColor: "bg-blue-100 text-blue-800",
          iconColor: "text-blue-600"
        }
      case "drive":
        return {
          icon: TrendingUp,
          bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
          borderColor: "border-purple-200",
          badgeColor: "bg-purple-100 text-purple-800",
          iconColor: "text-purple-600"
        }
      default:
        return {
          icon: Award,
          bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
          borderColor: "border-orange-200",
          badgeColor: "bg-orange-100 text-orange-800",
          iconColor: "text-orange-600"
        }
    }
  }

  const config = getCategoryConfig(update.category)
  const IconComponent = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className={`${config.bgColor} ${config.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <IconComponent className="w-full h-full" />
        </div>

        {/* Priority indicator */}
        {update.priority === "high" && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
        )}

        <CardContent className="p-6 relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl bg-white/80 ${config.iconColor}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <Badge className={`${config.badgeColor} border-0 text-xs font-medium`}>
                  {update.category}
                </Badge>
                {update.isNew && (
                  <Badge className="bg-[#4DA8DA] text-white text-xs ml-2 animate-pulse">
                    NEW
                  </Badge>
                )}
              </div>
            </div>
            
            {update.priority === "high" && (
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-[#0A2463] mb-3 group-hover:text-[#4DA8DA] transition-colors">
            {update.title}
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {update.description}
          </p>

          {/* Meta information */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4 text-[#4DA8DA]" />
                <span className="font-medium">{update.company}</span>
              </div>
              
              {update.students && update.students > 0 && (
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-[#4DA8DA]" />
                  <span>{update.students} Students</span>
                </div>
              )}
            </div>

            {update.package && (
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Award className="h-4 w-4 text-[#4DA8DA]" />
                <span className="font-medium text-green-600">{update.package}</span>
              </div>
            )}

            {update.deadline && (
              <div className="flex items-center gap-1 text-sm text-red-600">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Deadline: {update.deadline}</span>
              </div>
            )}

            {update.location && (
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-[#4DA8DA]" />
                <span>{update.location}</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              <span>{update.date}</span>
            </div>

            {update.actionLink && (
              <Button 
                size="sm" 
                className="bg-[#0A2463] hover:bg-[#4DA8DA] text-white transition-all duration-300"
                asChild
              >
                <a href={update.actionLink} className="flex items-center gap-1">
                  {update.actionText || "Learn More"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
