"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Search, Filter, CheckCircle, AlertCircle, Clock, Award } from "lucide-react"
import { faqs } from "./faqs-data"

export default function FAQsAccordion() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Filter FAQs based on search query and active tab
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeTab === "all" || faq.category === activeTab
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "general":
        return <HelpCircle className="h-5 w-5 text-[#4DA8DA]" />
      case "eligibility":
        return <CheckCircle className="h-5 w-5 text-[#4DA8DA]" />
      case "process":
        return <Clock className="h-5 w-5 text-[#4DA8DA]" />
      case "offers":
        return <Award className="h-5 w-5 text-[#4DA8DA]" />
      default:
        return <HelpCircle className="h-5 w-5 text-[#4DA8DA]" />
    }
  }

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#4DA8DA]/10 text-[#4DA8DA] rounded-full text-sm font-medium mb-4">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about the placement process
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Search and filter */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search FAQs..."
                className="pl-10 border-gray-300 focus-visible:ring-[#4DA8DA] focus-visible:border-[#4DA8DA]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category tabs */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-[#4DA8DA]" />
                <span className="font-medium text-gray-700">Filter by category:</span>
              </div>
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="eligibility"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
                >
                  Eligibility
                </TabsTrigger>
                <TabsTrigger
                  value="process"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
                >
                  Process
                </TabsTrigger>
                <TabsTrigger
                  value="offers"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm"
                >
                  Offers
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem value={faq.id} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3 text-left">
                            {getCategoryIcon(faq.category)}
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
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No FAQs Found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
