"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Dropdown menu data
const navMenus = [
  {
    name: "Home",
    href: "/",
    dropdown: [],
  },
  {
    name: "For Recruiters",
    href: "#recruiters",
    dropdown: [
      // { name: "Why IIITDM?", href: "/why-iiitdm" },
      { name: "Placement Procedure", href: "/placement-procedure" },
      { name: "Register(ERF)", href: "/placement-procedure#erf" },
    ],
  },
  {
    name: "For Students",
    href: "#students",
    dropdown: [
      { name: "Placement Rules", href: "/placement-rules" },
      { name: "Internship Rules", href: "/internship-rules" },
      { name: "Schedule and FAQs", href: "/faqs-schedule" },
    ],
  },
  {
    name: "Statistics",
    href: "/statistics",
    dropdown: [],
  },
  {
    name: "Contact Us",
    href: "#contact",
    dropdown: [
      { name: "Our Team", href: "/our-team" },
      { name: "Reaching IIITDM", href: "https://iiitdm.ac.in/maps-and-directions/from-airport" },
    ],
  },
  {
    name: "Brochure",
    href: "#brochure",
    dropdown: [],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-[#4DA8DA]/50 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="IIITDM Kancheepuram Logo"
                  width={42}
                  height={42}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="hidden md:inline-block font-semibold text-[#0A2463] text-base transition-all duration-300 group-hover:text-[#4DA8DA] tracking-tight">
                IIITDM Kancheepuram
              </span>
            </Link>
          </div>          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navMenus.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-[0.95rem] font-medium text-gray-800 hover:text-[#0A2463] transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  {item.dropdown.length > 0 && (
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 group-hover:text-[#4DA8DA] transition-all duration-300 ease-in-out ${
                        activeDropdown === item.name ? "rotate-180 text-[#4DA8DA]" : ""
                      }`}
                    />
                  )}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[0.125rem] bg-gradient-to-r from-[#4DA8DA] to-[#0A2463]/70 rounded-full transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>

                {item.dropdown.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: 5, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg overflow-hidden origin-top border border-gray-100"
                        style={{ minWidth: "230px" }}
                      >
                        <div className="py-1.5">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#4DA8DA]/5 hover:text-[#0A2463] transition-colors relative group"
                            >
                              <span className="absolute left-0 top-0 bottom-0 w-0 bg-[#4DA8DA]/20 transition-all duration-300 group-hover:w-1"></span>
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden hover:bg-[#4DA8DA]/10 transition-all duration-300 rounded-full"
              >
                <Menu className="h-5 w-5 text-[#0A2463]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-gray-100 shadow-2xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-[#0A2463]/5 to-white">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#4DA8DA]/30 shadow-sm">
                      <Image
                        src="/assets/logo.png"
                        alt="IIITDM Kancheepuram Logo"
                        width={40}
                        height={40}
                        className="transition-transform duration-500"
                      />
                    </div>
                    <span className="font-semibold text-[#0A2463] text-base tracking-tight">IIITDM Kancheepuram</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 rounded-full hover:bg-[#4DA8DA]/10 transition-colors duration-300"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="flex-1 overflow-auto bg-gradient-to-b from-white to-gray-50/50">
                  <div className="p-4">
                    <nav className="flex flex-col space-y-1">
                      {navMenus.map((item) => (
                        <div 
                          key={item.name} 
                          className="py-1 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 rounded-md transition-colors duration-300"
                        >
                          <Link
                            href={item.href}
                            className="block text-base font-medium text-gray-800 hover:text-[#0A2463] transition-colors py-2.5 px-3"
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                              {item.dropdown.length > 0 && (
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </Link>

                          {item.dropdown.length > 0 && (
                            <div className="pl-4 border-l-2 border-[#4DA8DA]/20 ml-3 mt-1 space-y-0.5 mb-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block py-2 px-3 text-sm text-gray-600 hover:text-[#0A2463] hover:bg-[#4DA8DA]/5 rounded transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>                </div>
                
                {/* Mobile menu footer with contact button */}
                <div className="p-5 border-t border-gray-100 bg-gray-50/80">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#0A2463] to-[#0A2463]/90 hover:from-[#4DA8DA] hover:to-[#4DA8DA]/90 text-white transition-all duration-300 shadow-sm"
                  >
                    Contact Us
                  </Button>
                  <div className="text-xs text-center text-gray-500 mt-3">
                    Indian Institute of Information Technology, Design & Manufacturing
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
