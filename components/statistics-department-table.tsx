"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Complete placement data with all departments
const placementData = [
  {
    program: "B.Tech",
    department: "CSE",
    total: 83,
    eligible: 62,
    eligiblePct: "74.7%",
    placed: 50,
    offers: 64,
    placementPct: "80.6%",
    offerPct: "103.2%",
    avgCtc: "9,85,730",
    maxCtc: "32,57,000"
  },
  {
    program: "",
    department: "CSE (AI)",
    total: 43,
    eligible: 31,
    eligiblePct: "72.1%",
    placed: 17,
    offers: 22,
    placementPct: "54.8%",
    offerPct: "71.0%",
    avgCtc: "11,67,233",
    maxCtc: "32,57,000"
  },
  {
    program: "",
    department: "ECE",
    total: 105,
    eligible: 72,
    eligiblePct: "68.6%",
    placed: 36,
    offers: 46,
    placementPct: "50.0%",
    offerPct: "63.9%",
    avgCtc: "10,73,952",
    maxCtc: "31,64,200"
  },
  {
    program: "",
    department: "MECH",
    total: 71,
    eligible: 44,
    eligiblePct: "62.0%",
    placed: 27,
    offers: 31,
    placementPct: "61.4%",
    offerPct: "70.5%",
    avgCtc: "6,47,105",
    maxCtc: "12,19,000"
  },
  {
    program: "",
    department: "SM",
    total: 31,
    eligible: 20,
    eligiblePct: "64.5%",
    placed: 11,
    offers: 13,
    placementPct: "55.0%",
    offerPct: "65.0%",
    avgCtc: "7,14,875",
    maxCtc: "12,19,000"
  },
  {
    program: "M.Tech",
    department: "CSE (DS&AI)",
    total: 13,
    eligible: 11,
    eligiblePct: "84.6%",
    placed: 7,
    offers: 8,
    placementPct: "63.6%",
    offerPct: "72.7%",
    avgCtc: "8,19,500",
    maxCtc: "18,78,000"
  },
  {
    program: "",
    department: "ECE(VLSI)",
    total: 4,
    eligible: 4,
    eligiblePct: "100.0%",
    placed: 3,
    offers: 3,
    placementPct: "75.0%",
    offerPct: "75.0%",
    avgCtc: "18,78,000",
    maxCtc: "18,78,000"
  },
  {
    program: "",
    department: "ECE (CSD)",
    total: 2,
    eligible: 2,
    eligiblePct: "100.0%",
    placed: 1,
    offers: 1,
    placementPct: "50.0%",
    offerPct: "50.0%",
    avgCtc: "6,00,000",
    maxCtc: "6,00,000"
  },
  {
    program: "",
    department: "MECH (SM)",
    total: 3,
    eligible: 2,
    eligiblePct: "66.7%",
    placed: 1,
    offers: 1,
    placementPct: "50.0%",
    offerPct: "50.0%",
    avgCtc: "15,00,259",
    maxCtc: "15,00,259"
  },
  {
    program: "",
    department: "MECH (ESD)",
    total: 4,
    eligible: 2,
    eligiblePct: "50.0%",
    placed: 1,
    offers: 1,
    placementPct: "50.0%",
    offerPct: "50.0%",
    avgCtc: "6,00,000",
    maxCtc: "6,00,000"
  },
  {
    program: "M.Des",
    department: "IPD",
    total: 12,
    eligible: 10,
    eligiblePct: "83.3%",
    placed: 7,
    offers: 8,
    placementPct: "70.0%",
    offerPct: "80.0%",
    avgCtc: "3,50,000",
    maxCtc: "3,50,000"
  }
];

// Total row data
const totalData = {
  program: "Total",
  department: "",
  total: 371,
  eligible: 260,
  eligiblePct: "70.1%",
  placed: 161,
  offers: 198,
  placementPct: "61.9%",
  offerPct: "76.2%",
  avgCtc: "9,75,721",
  maxCtc: "32,57,000"
};

export default function PlacementTable() {
  return (
    <div className="w-full p-6" data-section="department-table">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Department-wise Placement Statistics
      </h2>
      
      <div className="overflow-x-auto rounded-xl shadow-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-center min-w-[80px]">Programme</TableHead>
              <TableHead className="text-center min-w-[120px]">Department</TableHead>
              <TableHead className="text-center min-w-[80px]">Total Students</TableHead>
              <TableHead className="text-center min-w-[80px]">Eligible Students</TableHead>
              <TableHead className="text-center min-w-[80px]">Eligible %</TableHead>
              <TableHead className="text-center min-w-[80px]">Placed Students</TableHead>
              <TableHead className="text-center min-w-[80px]">Offers</TableHead>
              <TableHead className="text-center min-w-[80px]">Placement %</TableHead>
              <TableHead className="text-center min-w-[80px]">Offer %</TableHead>
              <TableHead className="text-center min-w-[100px]">Average CTC (LPA)</TableHead>
              <TableHead className="text-center min-w-[100px]">Maximum CTC (LPA)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {placementData.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-center font-medium">
                  {row.program}
                </TableCell>
                <TableCell className="text-center text-purple-700 font-semibold whitespace-nowrap">
                  {row.department}
                </TableCell>
                <TableCell className="text-center">{row.total}</TableCell>
                <TableCell className="text-center">{row.eligible}</TableCell>
                <TableCell className="text-center">{row.eligiblePct}</TableCell>
                <TableCell className="text-center">{row.placed}</TableCell>
                <TableCell className="text-center">{row.offers}</TableCell>
                <TableCell className="text-center">{row.placementPct}</TableCell>
                <TableCell className="text-center">{row.offerPct}</TableCell>
                <TableCell className="text-center">{row.avgCtc}</TableCell>
                <TableCell className="text-center">{row.maxCtc}</TableCell>
              </TableRow>
            ))}
            {/* Total row */}
            <TableRow className="bg-gray-100 font-bold border-t-2">
              <TableCell className="text-center">{totalData.program}</TableCell>
              <TableCell className="text-center">{totalData.department}</TableCell>
              <TableCell className="text-center">{totalData.total}</TableCell>
              <TableCell className="text-center">{totalData.eligible}</TableCell>
              <TableCell className="text-center">{totalData.eligiblePct}</TableCell>
              <TableCell className="text-center">{totalData.placed}</TableCell>
              <TableCell className="text-center">{totalData.offers}</TableCell>
              <TableCell className="text-center">{totalData.placementPct}</TableCell>
              <TableCell className="text-center">{totalData.offerPct}</TableCell>
              <TableCell className="text-center">{totalData.avgCtc}</TableCell>
              <TableCell className="text-center">{totalData.maxCtc}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
