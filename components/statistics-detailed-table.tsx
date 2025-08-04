"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { placementData2024_25 } from "@/data/placement-data-2024-25"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const StatisticsDetailedTable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [offerTypeFilter, setOfferTypeFilter] = useState("all")

  // Get unique departments and offer types for filters
  const departments = useMemo(() => {
    const depts = new Set(placementData2024_25.map((entry) => entry.department))
    return Array.from(depts).sort()
  }, [])

  const offerTypes = useMemo(() => {
    const types = new Set(placementData2024_25.map((entry) => entry.offerType))
    return Array.from(types).sort()
  }, [])

  // Filter data based on search term and filters
  const filteredData = useMemo(() => {
    return placementData2024_25.filter((entry) => {
      const matchesSearch =
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.offerType.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDepartment = departmentFilter === "all" || entry.department === departmentFilter
      const matchesOfferType = offerTypeFilter === "all" || entry.offerType === offerTypeFilter

      return matchesSearch && matchesDepartment && matchesOfferType
    })
  }, [searchTerm, departmentFilter, offerTypeFilter])

  // Calculate summary statistics for filtered data
  const filteredStats = useMemo(() => {
    const entriesWithSalary = filteredData.filter(
      (entry) => entry.salary && typeof entry.salary === "number" && entry.salary > 0,
    )

    const avgSalary =
      entriesWithSalary.length > 0
        ? entriesWithSalary.reduce((sum, entry) => sum + (typeof entry.salary === "number" ? entry.salary : 0), 0) /
          entriesWithSalary.length /
          100000
        : 0

    const maxSalary =
      entriesWithSalary.length > 0
        ? Math.max(...entriesWithSalary.map((entry) => (typeof entry.salary === "number" ? entry.salary : 0))) / 100000
        : 0

    return {
      totalEntries: filteredData.length,
      avgSalary,
      maxSalary,
    }
  }, [filteredData])

  // Format salary for display
  const formatSalary = (salary: string | number) => {
    if (!salary) return "-"

    const numValue = typeof salary === "string" ? Number.parseFloat(salary.replace(/[^0-9.]/g, "")) : salary

    if (isNaN(numValue) || numValue === 0) return "-"

    if (numValue >= 1000000) {
      return `₹${(numValue / 100000).toFixed(2)} LPA`
    } else {
      return `₹${numValue.toLocaleString()}`
    }
  }

  return (
    <section id="detailed-data" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Detailed Placement Data 2024-25</h2>

        <Card className="mb-8 shadow-md">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>Company-wise Placement Details</CardTitle>
                <CardDescription>Comprehensive list of all placements for 2024-25</CardDescription>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" /> Export Data
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, company, department..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                <Select value={offerTypeFilter} onValueChange={setOfferTypeFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by Offer Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Offer Types</SelectItem>
                    {offerTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="outline" className="bg-primary/10">
                  Search: {searchTerm}
                  <button className="ml-1" onClick={() => setSearchTerm("")}>
                    ×
                  </button>
                </Badge>
              )}
              {departmentFilter !== "all" && (
                <Badge variant="outline" className="bg-primary/10">
                  Department: {departmentFilter}
                  <button className="ml-1" onClick={() => setDepartmentFilter("all")}>
                    ×
                  </button>
                </Badge>
              )}
              {offerTypeFilter !== "all" && (
                <Badge variant="outline" className="bg-primary/10">
                  Offer Type: {offerTypeFilter}
                  <button className="ml-1" onClick={() => setOfferTypeFilter("all")}>
                    ×
                  </button>
                </Badge>
              )}
              {(searchTerm || departmentFilter !== "all" || offerTypeFilter !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setDepartmentFilter("all")
                    setOfferTypeFilter("all")
                  }}
                >
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="h-[600px] overflow-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-white">
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Offer Type</TableHead>
                      <TableHead>Stipend</TableHead>
                      <TableHead className="text-right">Salary/Annum</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.length > 0 ? (
                      filteredData.map((entry, index) => (
                        <TableRow key={entry.slNo}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-medium">{entry.name}</TableCell>
                          <TableCell>{entry.rollNo}</TableCell>
                          <TableCell>{entry.department}</TableCell>
                          <TableCell>{entry.program}</TableCell>
                          <TableCell>{entry.company}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                entry.offerType.includes("Full Time")
                                  ? "default"
                                  : entry.offerType.includes("Intern cum PPO")
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {entry.offerType}
                            </Badge>
                          </TableCell>
                          <TableCell>{entry.stipend || "-"}</TableCell>
                          <TableCell className="text-right">{formatSalary(entry.salary)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-4">
                          No results found. Try a different search term or filter.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Total Results</p>
                  <p className="text-2xl font-bold">{filteredStats.totalEntries}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {filteredStats.totalEntries === placementData2024_25.length
                      ? "Showing all entries"
                      : `Filtered from ${placementData2024_25.length} total entries`}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Average Salary</p>
                  <p className="text-2xl font-bold">
                    {filteredStats.avgSalary > 0 ? `₹${filteredStats.avgSalary.toFixed(2)} LPA` : "-"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Highest Salary</p>
                  <p className="text-2xl font-bold">
                    {filteredStats.maxSalary > 0 ? `₹${filteredStats.maxSalary.toFixed(2)} LPA` : "-"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default StatisticsDetailedTable
