"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { TeamMember } from "./team-data"

interface TeamCardProps {
  member: TeamMember
  variant?: "leadership" | "faculty" | "office" | "student"
}

export default function TeamCard({ member, variant = "leadership" }: TeamCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
          variant === "student" ? "h-full" : ""
        }`}
        whileHover={{ y: -5 }}
      >
        <div className="relative">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={member.image || "/placeholder.svg?height=400&width=400"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Social links overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}

              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-[#0A2463] text-lg">{member.name}</h3>
          <p className="text-[#4DA8DA] font-medium text-sm">{member.role}</p>
          {member.department && <p className="text-gray-600 text-sm mt-1">Department: {member.department}</p>}

          <Button
            variant="ghost"
            size="sm"
            className="mt-3 text-[#0A2463] hover:text-[#4DA8DA] hover:bg-[#4DA8DA]/10 p-0 h-auto"
            onClick={() => setIsOpen(true)}
          >
            View Profile
          </Button>
        </div>
      </motion.div>

      {/* Detailed profile dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-[#0A2463] text-xl">{member.name}</DialogTitle>
            <DialogDescription className="text-[#4DA8DA]">{member.role}</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg?height=400&width=400"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center gap-2 mt-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A2463]/10 p-2 rounded-full hover:bg-[#0A2463]/20 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A2463]" />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A2463]/10 p-2 rounded-full hover:bg-[#0A2463]/20 transition-colors"
                  >
                    <Github className="h-4 w-4 text-[#0A2463]" />
                  </a>
                )}
              </div>
            </div>

            <div className="col-span-2">
              {member.department && (
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Department:</span> {member.department}
                </div>
              )}

              {member.email && (
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#4DA8DA]" />
                  <a href={`mailto:${member.email}`} className="text-[#4DA8DA] hover:underline">
                    {member.email}
                  </a>
                </div>
              )}

              {member.phone && (
                <div className="mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#4DA8DA]" />
                  <a href={`tel:${member.phone}`} className="text-[#4DA8DA] hover:underline">
                    {member.phone}
                  </a>
                </div>
              )}

              <div className="mt-4">
                <p className="text-gray-700">{member.bio || "No bio available."}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
