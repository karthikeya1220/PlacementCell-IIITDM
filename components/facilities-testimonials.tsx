"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The facilities at IIITDM Kancheepuram are truly world-class. The smart classrooms and interview rooms made our recruitment process seamless and efficient.",
    author: "HR Manager",
    company: "Microsoft India",
  },
  {
    quote:
      "We were impressed by the technical infrastructure and the support provided by the student volunteers during our campus recruitment drive.",
    author: "Talent Acquisition Lead",
    company: "Amazon",
  },
  {
    quote:
      "The video conferencing facilities allowed us to connect our global team with candidates effortlessly. The quality was exceptional.",
    author: "Technical Recruiter",
    company: "Google",
  },
]

export default function FacilitiesTestimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 md:py-24 bg-[#0A2463] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Recruiters Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from companies that have experienced our facilities during their recruitment drives.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <Quote className="h-10 w-10 text-[#4DA8DA]/50 mb-4" />
              <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
