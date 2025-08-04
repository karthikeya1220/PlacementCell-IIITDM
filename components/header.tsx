"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "For Recruiters", href: "#recruiters" },
  { name: "Statistics", href: "#statistics" },
  { name: "For Students", href: "#students" },
  { name: "Forms", href: "#forms" },
  { name: "Contact Us", href: "#contact" },
  { name: "Brochure", href: "#brochure" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* College logo placeholder - replace with actual logo */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#0A2463]">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">II</div>
              </div>
              <span className="hidden md:inline-block font-bold text-[#0A2463]">IIITDM Kancheepuram</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0A2463] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {showSearch ? (
              <div className="relative hidden md:flex items-center">
                <Input type="search" placeholder="Search..." className="w-[200px] pr-8" autoFocus />
                <X
                  className="absolute right-2 h-4 w-4 text-gray-500 cursor-pointer"
                  onClick={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button className="hidden md:inline-flex bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">
              Employer Login
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 py-4 border-b">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[#0A2463]">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                        II
                      </div>
                    </div>
                    <span className="font-bold text-[#0A2463]">IIITDM Kancheepuram</span>
                  </div>

                  <div className="py-4">
                    <div className="relative mb-4">
                      <Input type="search" placeholder="Search..." className="pr-8" />
                      <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>

                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-700 hover:text-[#0A2463] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="mt-auto py-4 border-t">
                    <Button className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">Employer Login</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
