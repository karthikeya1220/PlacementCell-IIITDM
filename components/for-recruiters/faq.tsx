"use client"
import { motion } from "framer-motion"
import { faqs } from "./why-iiitdm-data"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-[#4DA8DA] text-[#0A2463]">
            Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Find answers to common questions about recruiting from IIITDM Kancheepuram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#0A2463] font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-gray-50 rounded-xl p-8 border border-[#4DA8DA]/20">
              <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer to your question, please feel free to contact our placement cell. We're
                here to help you with any queries regarding recruitment from IIITDM Kancheepuram.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Placement Cell
                </Button>
                <Button variant="outline" className="w-full border-[#4DA8DA] text-[#0A2463] hover:bg-[#4DA8DA]/10">
                  Download Recruitment Brochure
                </Button>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#0A2463] mb-3">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Email: placements@iiitdm.ac.in</p>
                  <p>Phone: +91-44-2747-6300</p>
                  <p>Address: IIITDM Kancheepuram, Vandalur-Kelambakkam Road, Chennai - 600127</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
