"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { FileCheck, CheckCircle, AlertTriangle } from "lucide-react"

export default function InternshipRulesAcknowledgement() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [rollNumber, setRollNumber] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && rollNumber && isChecked) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true)
      }, 1000)
    }
  }

  return (
    <section id="acknowledgement" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            Confirmation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Acknowledgement of Rules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please acknowledge that you have read and understood all the internship rules
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Acknowledgement Submitted!</h3>
                    <p className="text-gray-600 text-center max-w-md mb-6">
                      Thank you for acknowledging the internship rules. You are now eligible to participate in the
                      internship process.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg w-full max-w-md">
                      <p className="text-gray-700 font-medium">Acknowledgement Details:</p>
                      <p className="text-gray-600 mt-2">Name: {name}</p>
                      <p className="text-gray-600">Roll Number: {rollNumber}</p>
                      <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-full bg-[#4DA8DA]/10">
                        <FileCheck className="h-6 w-6 text-[#4DA8DA]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2463]">Rule Acknowledgement Form</h3>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <p className="text-yellow-700">
                          This acknowledgement is mandatory for all students participating in the internship process.
                          Please fill in the details accurately.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="roll" className="text-sm font-medium text-gray-700">
                          Roll Number
                        </label>
                        <Input
                          id="roll"
                          placeholder="Enter your roll number"
                          required
                          value={rollNumber}
                          onChange={(e) => setRollNumber(e.target.value)}
                          className="border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                        />
                      </div>

                      <div className="flex items-start space-x-2 mt-6">
                        <Checkbox
                          id="terms"
                          checked={isChecked}
                          onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                          >
                            I hereby acknowledge that I have read, understood, and agree to abide by all the internship
                            rules and guidelines.
                          </label>
                          <p className="text-sm text-gray-500">
                            I understand that any violation of these rules may result in disciplinary action, including
                            debarment from the internship process.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        type="submit"
                        className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90"
                        disabled={!name || !rollNumber || !isChecked}
                      >
                        Submit Acknowledgement
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
