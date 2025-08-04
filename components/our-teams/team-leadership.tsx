"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import TeamCard from "./team-card"
import { teamMembers } from "./team-data"

export default function TeamLeadership() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const leadershipMembers = teamMembers.filter((member) => member.category === "leadership")

  return (
    <section id="team-leadership" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Placement Leadership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the leaders who guide our placement initiatives and ensure our students get the best opportunities
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard member={member} variant="leadership" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
