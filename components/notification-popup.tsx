"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, X, Check, Trash2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NotificationPopupProps {
  onClose: () => void
  onClearAll: () => void
}

export default function NotificationPopup({ onClose, onClearAll }: NotificationPopupProps) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Company Registration",
      message: "Visa Inc has registered for campus placements",
      time: "2 hours ago",
      read: false,
      link: "#visa-registration",
    },
    {
      id: 2,
      title: "Placement Drive",
      message: "Amazon placement drive scheduled for next week",
      time: "Yesterday",
      read: false,
      link: "#amazon-drive",
    },
    {
      id: 3,
      title: "Resume Submission",
      message: "Deadline for AMD resume submission is tomorrow",
      time: "2 days ago",
      read: true,
      link: "#amd-submission",
    },
    {
      id: 4,
      title: "Pre-Placement Talk",
      message: "Attend Microsoft's pre-placement talk on Friday",
      time: "3 days ago",
      read: true,
      link: "#microsoft-talk",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const clearAll = () => {
    setNotifications([])
    onClearAll()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200"
    >
      <div className="flex items-center justify-between bg-[#0A2463] text-white p-3">
        <div className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Notifications</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={markAllAsRead}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            title="Mark all as read"
          >
            <Check className="h-4 w-4" />
          </button>
          <button
            onClick={clearAll}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            title="Clear all notifications"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            title="Close notifications"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 hover:bg-gray-50 transition-colors relative ${
                  notification.read ? "bg-white" : "bg-blue-50"
                }`}
              >
                <Link href={notification.link} className="block">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {!notification.read && <div className="w-2 h-2 bg-[#4DA8DA] rounded-full"></div>}
                      <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </div>
                </Link>
                <div className="absolute right-2 bottom-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!notification.read && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        markAsRead(notification.id)
                      }}
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                    >
                      <Check className="h-3 w-3" />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notification.id)
                    }}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
              <Bell className="h-6 w-6 text-gray-400" />
            </div>
            <h4 className="text-gray-900 font-medium">No notifications</h4>
            <p className="text-gray-500 text-sm mt-1">You're all caught up!</p>
          </div>
        )}
      </div>

      <div className="p-3 bg-gray-50 border-t border-gray-100">
        <Button
          variant="outline"
          size="sm"
          className="w-full text-[#0A2463] border-[#0A2463] hover:bg-[#0A2463] hover:text-white"
        >
          View all notifications
        </Button>
      </div>
    </motion.div>
  )
}
