"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does the entire placement procedure take?",
    answer:
      "The entire placement procedure typically takes 2-3 weeks from the time a company submits the ERF to the completion of the recruitment process. However, this timeline can be expedited based on the company's requirements.",
  },
  {
    question: "Can we conduct virtual interviews instead of visiting the campus?",
    answer:
      "Yes, we have state-of-the-art video conferencing facilities available on campus. Companies that are unable to visit physically can conduct virtual interviews and pre-placement talks.",
  },
  {
    question: "Is there a specific season for placements at IIITDM?",
    answer:
      "While companies can recruit throughout the year, our official placement season begins in July and continues until May of the following year. Most companies prefer to visit during the August-December period.",
  },
  {
    question: "How many students can we expect to participate in our recruitment drive?",
    answer:
      "The number of participants varies based on the job profile, package offered, and eligibility criteria set by the company. On average, companies can expect 50-100 students to participate in their recruitment drive.",
  },
  {
    question: "Can we request for specific facilities during our campus visit?",
    answer:
      "Yes, companies can specify their requirements in the ERF or communicate them to the placement cell. We will make arrangements accordingly to ensure a smooth recruitment process.",
  },
]

export default function PlacementProcedureFAQ() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our placement procedure.
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className="h-5 w-5 text-[#4DA8DA] flex-shrink-0" />
                      <span className="font-medium text-gray-800">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <div className="pl-8 text-gray-600">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">Still have questions about our placement procedure?</p>
          <p className="text-[#0A2463] font-medium">
            Contact us at{" "}
            <a href="mailto:placement@iiitdm.ac.in" className="text-[#4DA8DA] hover:underline">
              placement@iiitdm.ac.in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
