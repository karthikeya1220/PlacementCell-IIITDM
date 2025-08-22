"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Quote, GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function DirectorsMessage() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px] opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4DA8DA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA8DA]/10 to-[#0A2463]/10 text-[#0A2463] rounded-full text-sm font-medium mb-6 border border-[#4DA8DA]/20">
              <GraduationCap className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-6 tracking-tight">
              Messages from <span className="text-[#4DA8DA]">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Inspiring words from our esteemed leadership team
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4DA8DA] to-[#0A2463] mx-auto rounded-full"></div>
          </div>

          {/* Director's Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] rounded-3xl p-10 md:p-12 shadow-2xl text-white overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Profile Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto backdrop-blur-sm bg-white/10">
                        <Image
                          src="/director.jpg"
                          alt="Director IIITDM Kancheepuram"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-4 rounded-full border border-white/20 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        Director's Message
                      </div>
                      <Quote className="h-12 w-12 text-[#4DA8DA] mb-4 mx-auto lg:mx-0" />
                    </div>

                    <blockquote className="text-white/95 mb-8 leading-relaxed text-lg md:text-xl font-light">
                      "Welcome to IIITDM Kancheepuram, where innovation meets
                      excellence. As an Institute of National Importance, we are
                      dedicated to shaping the future leaders of technology and
                      design. Our students combine technical prowess with
                      creative thinking, making them ideal candidates for
                      organizations seeking transformative talent. I invite
                      industry partners to discover the exceptional capabilities
                      of our graduates."
                    </blockquote>

                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <p className="font-bold text-white text-xl mb-1">
                          Prof. M V Karthikeyan
                        </p>
                        <p className="text-white/80 text-sm font-medium">
                          Director, IIITDM Kancheepuram
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-[#4DA8DA]">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-xs text-white/70">
                            Institute of National Importance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dean's Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] rounded-3xl p-10 md:p-12 shadow-2xl text-white overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Profile Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto backdrop-blur-sm bg-white/10">
                        <Image
                          src="/dean-aa.jpg"
                          alt="Director IIITDM Kancheepuram"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-4 rounded-full border border-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
                        <BookOpen className="w-4 h-4" />
                        Dean Academic's Message
                      </div>
                      <Quote className="h-12 w-12 text-[#4DA8DA] mb-4 mx-auto lg:mx-0" />
                    </div>

                    <blockquote className="text-white/95 mb-8 leading-relaxed text-lg md:text-xl font-light">
                      "Congratulations in advance on the verge of completing
                      your academic journey at IIITDM Kancheepuram. This
                      milestone is a testament to your hard work, perseverance,
                      and commitment to excellence. As you step into the
                      professional world, remember that your education has
                      equipped you with the skills and mindset to solve complex
                      problems and create lasting change. Apply your engineering
                      knowledge and design thinking to make a positive impact on
                      society. The Placement Wing is dedicated to helping you
                      connect with top companies that align with your
                      aspirations, offering a platform for you to grow and
                      succeed. Be strategic and thoughtful in planning your
                      career. By contributing your talents to the technological
                      advancement of our nation, you will play a key role in
                      shaping India's future on the global stage. Best wishes
                      for your internships and placements. We are confident that
                      you will emerge as leaders, innovators, and changemakers
                      of tomorrow."
                    </blockquote>

                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <p className="font-bold text-white text-xl mb-1">
                          Prof. Jayabal K
                        </p>
                        <p className="text-white/80 text-sm font-medium">
                          Dean - Academic Affairs, IIITDM Kancheepuram
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-[#4DA8DA]">
                          <Users className="w-4 h-4" />
                          <span className="text-xs text-white/70">
                            Academic Excellence
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
