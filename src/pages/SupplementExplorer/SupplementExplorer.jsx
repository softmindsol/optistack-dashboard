import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, MapPin, TrendingUp } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function SupplementExplorer() {
  const [searchQuery, setSearchQuery] = useState("");

  const topSupplements = [
    { rank: 1, name: "Magnesium Glycinate", highlighted: false },
    { rank: 2, name: "Ashwagandha KSM-66", highlighted: true },
    { rank: 3, name: "Vitamin D3 + K2", highlighted: false },
    { rank: 4, name: "Creatine Monohydrate", highlighted: false },
    { rank: 5, name: "Modafinil (Prescription)", highlighted: false },
    { rank: 6, name: "Creatine Monohydrate", highlighted: false },
    { rank: 7, name: "Ashwagandha KSM-66", highlighted: false },
    { rank: 8, name: "Vitamin D3 + K2", highlighted: false },
    { rank: 9, name: "Ashwagandha KSM-66", highlighted: false },
    { rank: 10, name: "Magnesium Glycinate", highlighted: false },
  ];

  const genderData = [
    { name: "Male", value: 65, color: "#4CA6EB" },
    { name: "Female", value: 30, color: "#93C5ED" },
    { name: "Other", value: 5, color: "#E5E7EB" },
  ];

  const ageData = [
    { age: "18-25", value: 32 },
    { age: "26-35", value: 42 },
    { age: "36-45", value: 18 },
    { age: "46+", value: 12 },
  ];

  const geoData = [
    { country: "United States", percentage: 55 },
    { country: "United Kingdom", percentage: 20 },
    { country: "India", percentage: 15 },
    { country: "Canada", percentage: 10 },
  ];

  const healthOutcomes = [
    { label: "Lowered Stress Perception", percentage: 68, color: "#10B981" },
    { label: "Improved Focus", percentage: 34, color: "#10B981" },
    { label: "Emotional Blunting", percentage: 8, color: "#F43F5E" },
  ];

  return (
    <div className="min-h-screen font-rethink">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F1729] mb-2">
            Supplement Usage Explorer
          </h1>
          <p className="text-[#65758B]">
            Analyze user demographics, regions, and health outcomes for top
            supplements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Top Trending Supplements */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className=" font-semibold text-[#0F172A]">
                  Top Trending Supplements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search supplements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  {topSupplements.map((item) => (
                    <div
                      key={item.rank}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        item.highlighted ? "bg-[#E0F2FE]" : "hover:bg-slate-50"
                      }`}>
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                          item.highlighted
                            ? "bg-[#4CA6EB] text-white"
                            : "bg-slate-100 text-[#64748B]"
                        }`}>
                        #{item.rank}
                      </span>
                      <span className="text-sm text-[#0C4A6E] font-medium">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 text-[#64748B] rounded-lg">
                      <Users className="w-6 h-6 " />
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] text-[#64748B] mb-1">
                        ACTIVE USERS
                      </div>
                      <div className="text-[24px] font-bold text-[#0F172A] mb-1">
                        8,320
                      </div>
                      <div className="flex items-center gap-1 text-[12px] text-[#059669] font-regular">
                        <TrendingUp className="w-4 h-4" />
                        +8.2% this week
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 text-[#64748B] rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] text-[#64748B] font-medium mb-1">
                        TOP REGION
                      </div>
                      <div className="text-[18px] font-bold text-[#0F172A] mb-1">
                        United States
                      </div>
                      <div className="text-[12px] text-[#94A3B8]">
                        55% of user base
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gender Distribution */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[14px] font-semibold text-[#0F172A]">
                    Gender Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-48 h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={genderData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value">
                            {genderData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex text-[#475569] items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            70%
                          </div>
                          <div className="text-[12px] ">Female</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#4CA6EB]"></div>
                      <span className="text-[12px] ">Male 65%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#93C5ED]"></div>
                      <span className="text-[12px]">Female 30%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#E5E7EB]"></div>
                      <span className="text-[12px]">Other 5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Age Groups */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[14px] font-semibold text-[#0F172A]">
                    Age Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={ageData}>
                      <XAxis
                        dataKey="age"
                        stroke="#64748b"
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                      <Bar
                        dataKey="value"
                        fill="#4CA6EB"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution & Health Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Geographic Distribution */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[14px] font-semibold text-[#0F172A]">
                    Geographic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {geoData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#334155] text-[12px] font-medium">
                            {item.country}
                          </span>
                          <span className="text-slate-600">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-[#F1F5F9] rounded-full h-2">
                          <div
                            className="bg-[#4CA6EB] text-[#64748B] text-[12px] h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reported Health Outcomes */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[14px] font-semibold text-[#0F172A]">
                    Reported Health Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthOutcomes.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-[#F1F5F9] px-4 py-4 rounded-[8px]">
                        <div
                          className={`w-2 h-2 rounded-full mt-1.5`}
                          style={{ backgroundColor: item.color }}></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-[#1E293B] mb-1">
                            {item.label}
                          </div>
                          <div className="text-[12px] text-[#64748B]">
                            Reported by{" "}
                            <span className="text-[#334155] font-semibold text-[12px]">
                              {item.percentage}%
                            </span>{" "}
                            of users
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
