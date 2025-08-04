export interface PlacementDrive {
  id: string
  name: string
  startDate: string
  endDate: string
  companies: Company[]
}

export interface Company {
  id: string
  name: string
  logo: string
  role: string
  ctc: string
  eligibility: string
  process: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: "general" | "eligibility" | "process" | "offers"
}

export const placementDrives: PlacementDrive[] = [
  {
    id: "drive-1",
    name: "DRIVE 1",
    startDate: "16/08/2023",
    endDate: "26/08/2023",
    companies: [
      {
        id: "microsoft",
        name: "Microsoft",
        logo: "/placeholder.svg?height=200&width=200&text=Microsoft",
        role: "Software Engineer",
        ctc: "₹45 LPA",
        eligibility: "CGPA > 8.0, CSE/ECE",
        process: ["Online Assessment", "Technical Interview", "HR Interview"],
      },
      {
        id: "amazon",
        name: "Amazon",
        logo: "/placeholder.svg?height=200&width=200&text=Amazon",
        role: "SDE",
        ctc: "₹32 LPA",
        eligibility: "CGPA > 7.5, All Branches",
        process: ["Online Coding Test", "Technical Rounds", "Bar Raiser", "HR Round"],
      },
      {
        id: "google",
        name: "Google",
        logo: "/placeholder.svg?height=200&width=200&text=Google",
        role: "Software Developer",
        ctc: "₹40 LPA",
        eligibility: "CGPA > 8.5, CSE/ECE/ME",
        process: ["Online Assessment", "Phone Screen", "Onsite Interviews"],
      },
      {
        id: "goldman",
        name: "Goldman Sachs",
        logo: "/placeholder.svg?height=200&width=200&text=Goldman+Sachs",
        role: "Technology Analyst",
        ctc: "₹25 LPA",
        eligibility: "CGPA > 7.0, All Branches",
        process: ["Aptitude Test", "Technical Interview", "HR Interview"],
      },
    ],
  },
  {
    id: "drive-2",
    name: "DRIVE 2",
    startDate: "20/09/2023",
    endDate: "29/09/2023",
    companies: [
      {
        id: "adobe",
        name: "Adobe",
        logo: "/placeholder.svg?height=200&width=200&text=Adobe",
        role: "Software Engineer",
        ctc: "₹22 LPA",
        eligibility: "CGPA > 7.5, CSE/ECE",
        process: ["Online Assessment", "Technical Interview", "HR Interview"],
      },
      {
        id: "flipkart",
        name: "Flipkart",
        logo: "/placeholder.svg?height=200&width=200&text=Flipkart",
        role: "SDE",
        ctc: "₹28 LPA",
        eligibility: "CGPA > 7.0, All Branches",
        process: ["Online Coding Test", "Technical Rounds", "HR Round"],
      },
      {
        id: "samsung",
        name: "Samsung",
        logo: "/placeholder.svg?height=200&width=200&text=Samsung",
        role: "R&D Engineer",
        ctc: "₹18 LPA",
        eligibility: "CGPA > 7.0, ECE/ME",
        process: ["Written Test", "Technical Interview", "HR Interview"],
      },
      {
        id: "qualcomm",
        name: "Qualcomm",
        logo: "/placeholder.svg?height=200&width=200&text=Qualcomm",
        role: "VLSI Engineer",
        ctc: "₹20 LPA",
        eligibility: "CGPA > 7.5, ECE",
        process: ["Online Test", "Technical Rounds", "HR Round"],
      },
    ],
  },
  {
    id: "drive-3",
    name: "DRIVE 3",
    startDate: "09/10/2023",
    endDate: "20/10/2023",
    companies: [
      {
        id: "intel",
        name: "Intel",
        logo: "/placeholder.svg?height=200&width=200&text=Intel",
        role: "Hardware Engineer",
        ctc: "₹15 LPA",
        eligibility: "CGPA > 7.0, ECE/ME",
        process: ["Online Assessment", "Technical Interview", "HR Interview"],
      },
      {
        id: "tcs",
        name: "TCS",
        logo: "/placeholder.svg?height=200&width=200&text=TCS",
        role: "System Engineer",
        ctc: "₹7 LPA",
        eligibility: "CGPA > 6.0, All Branches",
        process: ["TCS NQT", "Technical Interview", "HR Interview"],
      },
      {
        id: "infosys",
        name: "Infosys",
        logo: "/placeholder.svg?height=200&width=200&text=Infosys",
        role: "Systems Engineer",
        ctc: "₹8 LPA",
        eligibility: "CGPA > 6.0, All Branches",
        process: ["InfyTQ", "Technical Interview", "HR Interview"],
      },
      {
        id: "accenture",
        name: "Accenture",
        logo: "/placeholder.svg?height=200&width=200&text=Accenture",
        role: "Associate Software Engineer",
        ctc: "₹6.5 LPA",
        eligibility: "CGPA > 6.0, All Branches",
        process: ["Cognitive Assessment", "Coding Assessment", "Interview"],
      },
    ],
  },
]

export const faqs: FAQ[] = [
  // General FAQs
  {
    id: "general-1",
    question: "What is the placement process at IIITDM Kancheepuram?",
    answer:
      "The placement process at IIITDM Kancheepuram typically consists of pre-placement talks, online assessments, technical interviews, and HR interviews. The process may vary slightly depending on the company.",
    category: "general",
  },
  {
    id: "general-2",
    question: "When does the placement season begin?",
    answer:
      "The placement season at IIITDM Kancheepuram typically begins in August and continues until May of the following year. Most companies prefer to visit during the August-December period.",
    category: "general",
  },
  {
    id: "general-3",
    question: "How can I register for the placement process?",
    answer:
      "Students can register for the placement process through the internal placement portal. Registration typically opens a few weeks before the placement season begins. You will need to submit your resume and other required documents.",
    category: "general",
  },
  {
    id: "general-4",
    question: "Is there a placement fee?",
    answer:
      "Yes, there is a nominal placement registration fee that covers administrative costs. The exact amount will be communicated by the placement office at the beginning of the academic year.",
    category: "general",
  },

  // Eligibility FAQs
  {
    id: "eligibility-1",
    question: "What is the minimum CGPA required to participate in placements?",
    answer:
      "The minimum CGPA requirement varies by company. Generally, most companies require a CGPA of 6.0 or above. However, some companies, especially in the IT sector, may have higher CGPA requirements of 7.0 or 8.0.",
    category: "eligibility",
  },
  {
    id: "eligibility-2",
    question: "Are there any backlogs allowed for placement eligibility?",
    answer:
      "Most companies do not allow active backlogs. Some companies may allow a maximum of 1-2 cleared backlogs, but this varies from company to company. It's best to clear all backlogs before the placement season.",
    category: "eligibility",
  },
  {
    id: "eligibility-3",
    question: "Can I participate in placements if I have a year gap?",
    answer:
      "Yes, students with a year gap can participate in placements. However, you should be prepared to explain the reason for the gap during interviews, as some companies may inquire about it.",
    category: "eligibility",
  },
  {
    id: "eligibility-4",
    question: "Are there any branch restrictions for certain companies?",
    answer:
      "Yes, some companies have branch restrictions. For example, core companies may only consider students from relevant branches like ME or ECE. IT companies generally consider students from all branches, but may have higher CGPA requirements for non-CSE students.",
    category: "eligibility",
  },

  // Process FAQs
  {
    id: "process-1",
    question: "What documents do I need to keep ready for the placement process?",
    answer:
      "You should keep the following documents ready: Updated resume, ID card, passport-size photographs, all original academic certificates, government ID proof, and any certificates of achievements or extracurricular activities.",
    category: "process",
  },
  {
    id: "process-2",
    question: "How should I prepare for the placement interviews?",
    answer:
      "Prepare by: 1) Strengthening your technical fundamentals, 2) Practicing coding problems, 3) Working on communication skills, 4) Preparing for HR questions, 5) Researching the companies you're applying to, and 6) Participating in mock interviews organized by the placement cell.",
    category: "process",
  },
  {
    id: "process-3",
    question: "What is the dress code for placement interviews?",
    answer:
      "The dress code for placement interviews is formal. Men should wear formal shirts, trousers, and formal shoes. Women can wear formal shirts/tops with trousers or formal Indian attire. It's important to maintain a professional appearance.",
    category: "process",
  },
  {
    id: "process-4",
    question: "Can I apply to multiple companies?",
    answer:
      "Yes, you can apply to multiple companies until you receive an offer. Once you accept an offer, you will not be allowed to sit for further placement drives as per the placement policy.",
    category: "process",
  },

  // Offers FAQs
  {
    id: "offers-1",
    question: "What happens if I get multiple offers?",
    answer:
      "If you receive multiple offers on the same day, you can choose the one you prefer. However, once you accept an offer, you cannot appear for other companies as per the placement policy.",
    category: "offers",
  },
  {
    id: "offers-2",
    question: "Can I reject an offer after accepting it?",
    answer:
      "No, once you accept an offer, you cannot reject it. Accepting and then rejecting an offer can lead to disciplinary action and may affect the relationship between the company and the institute.",
    category: "offers",
  },
  {
    id: "offers-3",
    question: "What is the policy for higher studies after accepting a job offer?",
    answer:
      "If you accept a job offer and later decide to pursue higher studies, you should inform both the company and the placement cell. The company's policy regarding this varies, and some may require you to serve a notice period or pay a penalty.",
    category: "offers",
  },
  {
    id: "offers-4",
    question: "When do companies typically release joining letters?",
    answer:
      "Companies typically release joining letters 1-2 months before the joining date. The joining date is usually after the completion of your degree, but some companies may offer early joining options for exceptional candidates.",
    category: "offers",
  },
]
