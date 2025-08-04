"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Send, CheckCircle } from "lucide-react"

export default function FAQsContact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            If you couldn't find the answer to your question, feel free to reach out to us
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2463] mb-6">Send Us Your Question</h3>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Question Submitted!</h4>
                      <p className="text-gray-600 text-center max-w-md">
                        Thank you for reaching out. We'll get back to you within 24-48 hours with an answer to your
                        question.
                      </p>
                      <Button className="mt-6 bg-[#0A2463] hover:bg-[#0A2463]/90" onClick={() => setIsSubmitted(false)}>
                        Ask Another Question
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="roll" className="text-sm font-medium text-gray-700">
                            Roll Number
                          </label>
                          <Input
                            id="roll"
                            placeholder="Your roll number"
                            required
                            className="border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          required
                          className="border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700">
                          Question Category
                        </label>
                        <select
                          id="category"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] focus:border-[#4DA8DA]"
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="general">General</option>
                          <option value="eligibility">Eligibility</option>
                          <option value="process">Process</option>
                          <option value="offers">Offers</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="question" className="text-sm font-medium text-gray-700">
                          Your Question
                        </label>
                        <Textarea
                          id="question"
                          placeholder="Type your question here..."
                          required
                          className="min-h-[120px] border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 gap-2">
                        <Send className="h-4 w-4" />
                        Submit Question
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <Card className="shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#4DA8DA]/10">
                      <Mail className="h-6 w-6 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2463] text-lg mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-1">For placement related queries:</p>
                      <a href="mailto:placement.students@iiitdm.ac.in" className="text-[#4DA8DA] hover:underline">
                        placement.students@iiitdm.ac.in
                      </a>
                      <p className="text-gray-600 mt-3 mb-1">For technical issues with the placement portal:</p>
                      <a href="mailto:placement.tech@iiitdm.ac.in" className="text-[#4DA8DA] hover:underline">
                        placement.tech@iiitdm.ac.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#4DA8DA]/10">
                      <Phone className="h-6 w-6 text-[#4DA8DA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2463] text-lg mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-1">Placement Secretary:</p>
                      <a href="tel:+917013310441" className="text-[#4DA8DA] hover:underline">
                        +91 70133 10441
                      </a>
                      <p className="text-gray-600 mt-3 mb-1">Placement Office:</p>
                      <a href="tel:+914427476316" className="text-[#4DA8DA] hover:underline">
                        +91 44 2747 6316
                      </a>
                      <p className="text-gray-500 text-sm mt-3">Office Hours: Monday to Friday, 9:00 AM to 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md overflow-hidden bg-[#0A2463] text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Quick Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <span>Check the FAQs thoroughly before submitting a question</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <span>Be specific in your question to get a more accurate answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <span>For urgent queries, calling is faster than email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#4DA8DA] mt-0.5" />
                      <span>Follow the placement cell on social media for updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
