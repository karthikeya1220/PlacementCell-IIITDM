"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Mail,
  MessageSquare,
  Calendar,
  ClipboardList,
  Users,
  CheckSquare,
  CheckCircle,
  Flag,
  ArrowRight,
  ExternalLink,
  FileText,
  Phone,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Procedure steps data
const procedureSteps = [
  {
    id: 1,
    title: "Invitation",
    icon: <Mail className="h-6 w-6" />,
    description:
      "Placement Cell (nodal point for placements at IIITDM Kancheepuram), assisted by student representatives, sends invitation to companies along with relevant information and documents – Placement Brochure, Employer Registration Form (ERF). A company can also show interest in recruiting IIITDM Kancheepuram students by contacting Placement Cell by writing to placement@iiitdm.ac.in, stating intent to visit IIITDM Kancheepuram campus for recruitment.",
    cta: {
      text: "Fill ERF",
      link: "#erf",
    },
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Response",
    icon: <MessageSquare className="h-6 w-6" />,
    description:
      "After receiving filled in ERF and relevant information from a company, T&P Cell will reply within 2-3 working days through email. The dates for campus interviews are allotted on the basis of information provided in ERF. It is expected that correct and complete information is provided by companies in ERF.",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Dates",
    icon: <Calendar className="h-6 w-6" />,
    description:
      "Suitable date for the Pre Placement Talk (PPT) is decided by the discussions between the companies and the T&P Cell. After confirmation from the companies, students are notified of the PPT date. However, the PPT and recruitment process can also go together.",
    color: "bg-pink-500",
  },
  {
    id: 4,
    title: "Registration",
    icon: <ClipboardList className="h-6 w-6" />,
    description:
      "Interested students will register for a particular company online through an internal website or by hard copies. After the deadline, the information will be forwarded to companies.",
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Shortlist",
    icon: <Users className="h-6 w-6" />,
    description:
      "Companies are required to send the list of short listed students by email to the T&P Cell prior to the campus visit for final interviews.",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "Evaluation",
    icon: <CheckSquare className="h-6 w-6" />,
    description:
      "The companies visit the campus for placements on the allotted dates and conduct Group Discussions/Aptitude test/Technical test/Personal Interviews etc., as part of their preferred selection procedure.",
    color: "bg-green-500",
  },
  {
    id: 7,
    title: "Decision",
    icon: <CheckCircle className="h-6 w-6" />,
    description:
      "The companies are expected to furnish the final list of selected students on the same day after the selection procedure is completed. This will enable the Institute by not allowing the selected students to the companies visiting at later dates.",
    color: "bg-teal-500",
  },
  {
    id: 8,
    title: "Conclusion",
    icon: <Flag className="h-6 w-6" />,
    description:
      "The decision regarding the dates is at the discretion of the T&P cell. Companies are expected to strictly adhere to the time and dates slots allowed to them. Any change must be notified in advance. The facility of video conferencing is available at the campus and can be availed for the purpose of interviewing candidates in case the company is unable to visit the campus.",
    color: "bg-indigo-500",
  },
]

export default function PlacementProcedureTimeline() {
  const [activeStep, setActiveStep] = useState(1)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const selectedStep = procedureSteps.find((step) => step.id === activeStep) || procedureSteps[0]

  return (
    <section id="timeline" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px] opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4DA8DA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA8DA]/10 to-[#0A2463]/10 text-[#0A2463] rounded-full text-sm font-medium mb-6 border border-[#4DA8DA]/20">
            <FileText className="w-4 h-4" />
            Step by Step
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-6 tracking-tight">
            Our <span className="text-[#4DA8DA]">Placement Procedure</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Follow our streamlined 8-step process to recruit the best talent from IIITDM Kancheepuram.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4DA8DA] to-[#0A2463] mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Timeline steps */}
          <div className="relative mb-20">
            <div className="absolute left-0 right-0 h-1 top-7 bg-gradient-to-r from-[#4DA8DA]/30 via-[#0A2463]/50 to-[#4DA8DA]/30 rounded-full"></div>

            <div className="flex justify-between relative">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      activeStep === step.id
                        ? "bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] text-white scale-110 shadow-2xl border-white"
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#4DA8DA] hover:text-[#4DA8DA] hover:scale-105 shadow-lg"
                    }`}
                    aria-label={`Step ${step.id}: ${step.title}`}
                  >
                    <span className="font-bold text-lg">{step.id}</span>
                  </button>

                  <div
                    className={`absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
                      activeStep === step.id ? "text-[#0A2463] scale-105" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative">
                    <div className={`p-6 rounded-2xl ${selectedStep.color} text-white shadow-lg`}>
                      {selectedStep.icon}
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-2xl border border-gray-200 opacity-50"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] text-white font-bold text-lg shadow-lg">
                        {selectedStep.id}
                      </div>
                      <h3 className="text-3xl font-bold text-[#0A2463]">{selectedStep.title}</h3>
                    </div>

                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">{selectedStep.description}</p>

                    {selectedStep.cta && (
                      <Button asChild className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#0A2463] text-white group shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href={selectedStep.cta.link}>
                          {selectedStep.cta.text}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 px-8 md:px-12 py-6 flex justify-between items-center border-t border-gray-100">
                <div className="text-sm font-medium text-gray-600">
                  Step {selectedStep.id} of {procedureSteps.length}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                    disabled={selectedStep.id === 1}
                    className="border-[#4DA8DA]/30 text-[#0A2463] hover:border-[#4DA8DA] hover:bg-[#4DA8DA]/10 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, procedureSteps.length))}
                    disabled={selectedStep.id === procedureSteps.length}
                    className="border-[#4DA8DA]/30 text-[#0A2463] hover:border-[#4DA8DA] hover:bg-[#4DA8DA]/10 disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ERF Section */}
          <div id="erf" className="mt-20 bg-gradient-to-br from-[#4DA8DA]/10 via-blue-50/50 to-white rounded-2xl p-10 md:p-12 shadow-xl border border-[#4DA8DA]/20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#4DA8DA]/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0A2463]/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  {/* Enhanced Update Alert */}
                  <div className="relative overflow-hidden rounded-2xl mb-8">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4DA8DA]/10 via-[#0A2463]/5 to-[#4DA8DA]/10 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-blue-50/80" />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4DA8DA]/20 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0A2463]/20 to-transparent rounded-full blur-2xl" />
                    
                    <div className="relative z-10 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        {/* Icon and badge */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] flex items-center justify-center shadow-xl">
                              <FileText className="w-8 h-8 text-white" />
                            </div>
                            {/* Pulsing ring */}
                            <div className="absolute -inset-2 rounded-2xl border-2 border-[#4DA8DA]/30 animate-pulse" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0A2463]/10 to-[#4DA8DA]/10 px-4 py-2 rounded-full text-[#0A2463] text-sm font-medium border border-[#4DA8DA]/20">
                              <div className="w-2 h-2 bg-[#4DA8DA] rounded-full animate-pulse" />
                              Breaking Update
                            </div>
                            <div className="text-sm font-medium text-[#4DA8DA] bg-white/60 px-3 py-1 rounded-full">
                              August 2024
                            </div>
                          </div>
                          
                          <h4 className="text-xl md:text-2xl font-bold text-[#0A2463] mb-3 leading-tight">
                            Enhanced ERF System Now Live
                          </h4>
                          
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            The Employer Registration Form (ERF) has been completely redesigned for the 2024-25 placement season. 
                            Experience our new streamlined process with enhanced features, digital signatures, and faster approval workflows.
                          </p>
                          
                          {/* Feature highlights */}
                          <div className="grid sm:grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full" />
                              <span>Digital signature support</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full" />
                              <span>Enhanced job matching</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full" />
                              <span>Faster approval process</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full" />
                              <span>Real-time status tracking</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0A2463]/10 to-[#4DA8DA]/10 px-4 py-2 rounded-full text-[#0A2463] text-sm font-medium mb-4 border border-[#4DA8DA]/20">
                    <FileText className="w-4 h-4" />
                    Important Form
                  </div>
                  <h3 className="text-3xl font-bold text-[#0A2463] mb-6">Employer Registration Form (ERF)</h3>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      The ERF is the primary document for companies interested in recruiting at IIITDM Kancheepuram. 
                      Our updated form provides a comprehensive overview of your recruitment requirements and helps us 
                      facilitate the best possible placement experience.
                    </p>

                    {/* New Features Showcase */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          What's New in 2024-25
                        </h4>
                        <ul className="text-blue-800 text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Enhanced job description fields for better candidate matching</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Streamlined eligibility criteria specification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Integrated timeline management system</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Digital signature and faster approval process</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          Benefits for Recruiters
                        </h4>
                        <ul className="text-green-800 text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Faster processing time (48-72 hours)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Real-time application status tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Enhanced candidate profile insights</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>Dedicated support throughout the process</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Current Status & Access</h4>
                          <p className="text-amber-800 text-sm leading-relaxed">
                            The updated ERF is now available for the 2024-25 placement season. To ensure security and 
                            data integrity, the form is distributed directly to registered companies. Please contact our 
                            Placement Cell team for access and detailed instructions on the new submission process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button 
                      className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#0A2463] text-white group shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a href="mailto:placement@iiitdm.ac.in" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Request ERF Access
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#4DA8DA]/30 text-[#0A2463] hover:border-[#4DA8DA] hover:bg-[#4DA8DA]/10 group"
                      asChild
                    >
                      <a href="mailto:placement@iiitdm.ac.in" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Contact Support
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 bg-gradient-to-br from-white via-blue-50/30 to-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#4DA8DA]/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#0A2463]/10 to-transparent rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-[#0A2463] text-xl">Quick Contact</h4>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#4DA8DA]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-4 w-4 text-[#4DA8DA]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <a href="mailto:placement@iiitdm.ac.in" className="text-[#0A2463] hover:text-[#4DA8DA] transition-colors text-sm">
                            placement@iiitdm.ac.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#4DA8DA]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-4 w-4 text-[#4DA8DA]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Phone</p>
                          <a href="tel:+914427476316" className="text-[#0A2463] hover:text-[#4DA8DA] transition-colors text-sm">
                            +91-44-2747 6316
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#4DA8DA]/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 text-[#4DA8DA]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Office Hours</p>
                          <p className="text-gray-700 text-sm">
                            Mon-Fri: 9:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <Clock className="h-3 w-3 text-white" />
                        </div>
                        <span className="font-semibold text-green-800 text-sm">Expected Response Time</span>
                      </div>
                      <p className="text-green-700 text-sm leading-relaxed">
                        We typically respond to ERF submissions within <span className="font-medium">48-72 hours</span> 
                        during business days. Priority processing available for urgent requests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
