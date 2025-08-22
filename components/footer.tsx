import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A2463] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <div className="absolute inset-0 flex items-center justify-center text-[#0A2463] font-bold">II</div>
              </div>
              <span className="font-bold text-xl">IIITDM</span>
            </div>
            <p className="text-gray-300 mb-6">Training and Placement Cell</p>
            <div className="flex items-center gap-2 text-gray-300 mb-3">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">Vandalur-Kelambakkam Road, Chennai: 600127</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mb-3">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">placement@iiitdm.ac.in</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">+91-44-2747 6316</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4DA8DA] mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  About IIITDM
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Placement Brochure
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Placement Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Placement Procedure
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Past Recruiters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4DA8DA] mr-2"></span>
              For Students
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Placement Rules
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Internship Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#4DA8DA] transition-all duration-300"></span>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4DA8DA] mr-2"></span>
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            <h4 className="font-medium mb-2">Placement Officers</h4>
            <p className="text-sm text-gray-300 mb-1">Dr. Senthilkumaran K</p>
            <p className="text-sm text-gray-300 mb-4">Dr. Priyanka Kokil</p>

            <Link
              href="/our-team"
              className="inline-flex items-center gap-1 bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} IIITDM Kancheepuram. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
