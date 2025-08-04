export type Company = {
    name: string
    offerType: "Full Time" | "Intern" | "Intern cum PPO"
    ctc?: string
    stipend?: string
    logo?: string
    count: number
  }
  
  export type ScheduleMonth = {
    name: string
    period: string
    description: string
    companies: Company[]
    highlight?: boolean
  }
  
  export const placementScheduleData: ScheduleMonth[] = [
    {
      name: "July 2024",
      period: "July 1-31, 2024",
      description: "Preparation Phase - Resume building, mock interviews, and placement registration",
      companies: [],
      highlight: true,
    },
    {
      name: "August 2024",
      period: "August 1-31, 2024",
      description: "Premium Internships & PPOs - Top tech and core companies visit for internship recruitment",
      companies: [
        {
          name: "Amazon",
          offerType: "Intern",
          stipend: "₹1,10,000-1,20,000 per month",
          count: 3,
        },
        {
          name: "AMD",
          offerType: "Intern cum PPO",
          stipend: "₹35,000-45,000 per month",
          ctc: "₹13.4-18.7 LPA",
          count: 8,
        },
        {
          name: "Flipkart",
          offerType: "Intern",
          stipend: "₹1,00,000 per month",
          count: 3,
        },
        {
          name: "AT&T",
          offerType: "Intern cum PPO",
          stipend: "₹49,627 per month",
          ctc: "₹14 LPA",
          count: 1,
        },
      ],
    },
    {
      name: "September 2024",
      period: "September 1-30, 2024",
      description: "Core & IT Internships - Engineering and IT companies visit for internship recruitment",
      companies: [
        {
          name: "Quantrium",
          offerType: "Intern cum PPO",
          stipend: "₹30,000 per month",
          ctc: "₹10.6 LPA",
          count: 7,
        },
        {
          name: "MAQ Software",
          offerType: "Intern cum PPO",
          stipend: "₹35,000 per month",
          ctc: "₹9 LPA",
          count: 3,
        },
        {
          name: "Beehyv",
          offerType: "Intern cum PPO",
          stipend: "₹35,000 per month",
          ctc: "₹8 LPA",
          count: 2,
        },
        {
          name: "Caterpillar",
          offerType: "Intern cum PPO",
          stipend: "₹25,000 per month",
          count: 1,
        },
        {
          name: "Stellantis",
          offerType: "Intern",
          stipend: "₹20,000 per month",
          count: 2,
        },
      ],
    },
    {
      name: "October 2024",
      period: "October 1-31, 2024",
      description: "Startup & Research Internships - Innovative startups and research organizations visit campus",
      companies: [
        {
          name: "TuTr Hyperloop",
          offerType: "Intern cum PPO",
          stipend: "₹10,000 per month",
          count: 5,
        },
        {
          name: "Eizen.ai",
          offerType: "Intern",
          stipend: "₹20,000 per month",
          count: 1,
        },
        {
          name: "Skyroot Aerospace",
          offerType: "Intern cum PPO",
          stipend: "₹20,000 per month",
          count: 1,
        },
        {
          name: "Agnikul Cosmos",
          offerType: "Intern",
          stipend: "₹15,000 per month",
          count: 1,
        },
        {
          name: "ERNET",
          offerType: "Intern",
          stipend: "₹10,000 per month",
          count: 7,
        },
      ],
    },
    {
      name: "November 2024",
      period: "November 1-30, 2024",
      description: "Premium Full-Time Placements - Top companies visit for full-time recruitment",
      companies: [
        {
          name: "Visa Inc",
          offerType: "Full Time",
          ctc: "₹31.64 LPA",
          count: 4,
        },
        {
          name: "AMD",
          offerType: "Full Time",
          ctc: "₹18.78 LPA",
          count: 4,
        },
        {
          name: "Applied Materials",
          offerType: "Full Time",
          ctc: "₹12-12.3 LPA",
          count: 2,
        },
        {
          name: "Global Foundaries",
          offerType: "Intern cum PPO",
          ctc: "₹15 LPA",
          count: 1,
        },
        {
          name: "GE Vernova",
          offerType: "Intern cum PPO",
          ctc: "₹17 LPA",
          count: 1,
        },
      ],
      highlight: true,
    },
    {
      name: "December 2024",
      period: "December 1-31, 2024",
      description: "Core Engineering Placements - Core engineering companies visit for full-time recruitment",
      companies: [
        {
          name: "Mbit Wireless",
          offerType: "Full Time",
          ctc: "₹11-13 LPA",
          count: 8,
        },
        {
          name: "Trimble",
          offerType: "Full Time",
          ctc: "₹12 LPA",
          count: 5,
        },
        {
          name: "General Motors",
          offerType: "Full Time",
          ctc: "₹10 LPA",
          count: 1,
        },
        {
          name: "L&T Technology Solutions",
          offerType: "Intern",
          stipend: "₹20,000 per month",
          ctc: "₹6 LPA",
          count: 1,
        },
      ],
    },
    {
      name: "January 2025",
      period: "January 1-31, 2025",
      description: "IT & Service Companies - IT and service sector companies visit for full-time recruitment",
      companies: [
        {
          name: "Accenture",
          offerType: "Full Time",
          ctc: "₹12.19 LPA",
          count: 8,
        },
        {
          name: "Infosys",
          offerType: "Full Time",
          ctc: "₹3.6-13.5 LPA",
          count: 5,
        },
        {
          name: "Turing",
          offerType: "Full Time",
          ctc: "₹10 LPA",
          count: 8,
        },
        {
          name: "Zoho",
          offerType: "Full Time",
          ctc: "₹8.4 LPA",
          count: 3,
        },
        {
          name: "Capgemini",
          offerType: "Full Time",
          ctc: "₹7.5 LPA",
          count: 1,
        },
      ],
    },
    {
      name: "February 2025",
      period: "February 1-28, 2025",
      description: "Financial & Analytics Companies - Financial and analytics companies visit for recruitment",
      companies: [
        {
          name: "Lighthouse Canton",
          offerType: "Intern cum PPO",
          ctc: "₹15 LPA",
          count: 2,
        },
        {
          name: "Tiger Analytics",
          offerType: "Full Time",
          ctc: "₹7.5 LPA",
          count: 2,
        },
        {
          name: "Chola MS",
          offerType: "Full Time",
          ctc: "₹9 LPA",
          count: 3,
        },
        {
          name: "Plum",
          offerType: "Intern cum PPO",
          ctc: "₹16 LPA",
          count: 3,
        },
        {
          name: "ADP",
          offerType: "Full Time",
          ctc: "₹6 LPA",
          count: 2,
        },
      ],
    },
    {
      name: "March 2025",
      period: "March 1-31, 2025",
      description: "Continuous Placement Phase - Additional opportunities for students yet to be placed",
      companies: [
        {
          name: "Academor",
          offerType: "Full Time",
          ctc: "₹4 LPA",
          count: 20,
        },
        {
          name: "Forsys",
          offerType: "Intern cum PPO",
          ctc: "₹12 LPA",
          count: 3,
        },
        {
          name: "Sutherland",
          offerType: "Intern cum PPO",
          stipend: "₹15,000 per month",
          ctc: "₹6 LPA",
          count: 6,
        },
        {
          name: "CADMACRO",
          offerType: "Intern cum PPO",
          ctc: "₹8 LPA",
          count: 3,
        },
        {
          name: "TNQ Technologies",
          offerType: "Full Time",
          ctc: "₹10 LPA",
          count: 5,
        },
      ],
    },
  ]
  
  export const departmentData = [
    { name: "CSE", count: 58, percentage: 32 },
    { name: "CSE (AI)", count: 21, percentage: 12 },
    { name: "ECE", count: 42, percentage: 23 },
    { name: "Mechanical", count: 25, percentage: 14 },
    { name: "Smart Manufacturing", count: 12, percentage: 7 },
    { name: "M.Tech CSE", count: 8, percentage: 4 },
    { name: "M.Tech ECE", count: 5, percentage: 3 },
    { name: "M.Tech Mechanical/SM", count: 2, percentage: 1 },
    { name: "M.Des", count: 1, percentage: 0.5 },
    { name: "Others", count: 8, percentage: 4.5 },
  ]
  
  export const offerTypeData = [
    { type: "Full Time", count: 102, percentage: 56 },
    { type: "Intern cum PPO", count: 48, percentage: 26 },
    { type: "Internship Only", count: 32, percentage: 18 },
  ]
  
  export const salaryRangeData = [
    { range: "Above 15 LPA", count: 12, percentage: 7 },
    { range: "10-15 LPA", count: 28, percentage: 15 },
    { range: "7-10 LPA", count: 42, percentage: 23 },
    { range: "5-7 LPA", count: 38, percentage: 21 },
    { range: "Below 5 LPA", count: 62, percentage: 34 },
  ]
  