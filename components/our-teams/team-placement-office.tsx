"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import TeamCard from "./team-card"
import { teamMembers } from "./team-data"
import { Mail, Phone, MapPin } from "lucide-react"

export default function TeamPlacementOffice() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const officeMembers = teamMembers.filter((member) => member.category === "office")

  return (
    <section id="contact-us" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Office
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Placement Office</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The dedicated staff who manage our placement activities and coordinate with companies
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {officeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard member={member} variant="office" />
              </motion.div>
            ))}
          </div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0A2463] text-white rounded-xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-[#4DA8DA] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-white/80 mb-1">For Companies:</p>
                  <a href="mailto:placement@iiitdm.ac.in" className="text-white hover:text-[#4DA8DA] transition-colors">
                    placement@iiitdm.ac.in
                  </a>
                  <p className="text-white/80 mt-2 mb-1">For Students:</p>
                  <a
                    href="mailto:placement.students@iiitdm.ac.in"
                    className="text-white hover:text-[#4DA8DA] transition-colors"
                  >
                    placement.students@iiitdm.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-[#4DA8DA] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-white/80 mb-1">Training & Placement Officer:</p>
                  <a href="tel:+919344615687" className="text-white hover:text-[#4DA8DA] transition-colors">
                    +91 934 461 5687
                  </a>
                  <p className="text-white/80 mt-2 mb-1">Office:</p>
                  <a href="tel:+914427476316" className="text-white hover:text-[#4DA8DA] transition-colors">
                    +91 44 2747 6316
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[#4DA8DA] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-white/80">
                    Training & Placement Cell,
                    <br />
                    IIITDM Kancheepuram,
                    <br />
                    Vandalur-Kelambakkam Road,
                    <br />
                    Chennai - 600127
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
