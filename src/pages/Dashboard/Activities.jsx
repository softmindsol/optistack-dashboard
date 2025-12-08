import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  MapPin } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {moodData, activities, supplements, installations, symptomsData, activeUsersData} from '@/utils/constants/chart'
export default function Activities() {
  const [activeTab, setActiveTab] = useState("Monthly");

 


  return (
    <div className="min-h-screen w-full bg-slate-50 py-6 font-rethink text-[#101828]">
      <div className=" space-y-6">
        {/* Active Users & Top Symptoms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Users Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#0F1729]">
                  Active Users
                </CardTitle>
                <div className="flex gap-2 bg-[#F2F4F7] rounded-[8px] p-1 ">
                  {["Monthly", "Quarterly", "Annually"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-[#101828]  text-sm rounded-md  transition-colors ${
                        activeTab === tab
                          ? "bg-white rounded-[6px]"
                          : "text-[#667085] hover:bg-slate-300"
                      }`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={activeUsersData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4DB1EA" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#4DB1EA"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="day"
                    stroke="#64748b"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#64748b"
                    tick={{ fontSize: 12 }}
                    domain={[0, 600]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#4DB1EA"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top 5 Reported Symptoms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0F1729]">
                Top 5 Reported Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={symptomsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="name"
                    stroke="#64748b"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#64748b"
                    tick={{ fontSize: 12 }}
                    domain={[0, 60]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="value" fill="#4DB1EA" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* App Installations by Location */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2 text-[#0F1729]">
                <MapPin className="w-5 h-5" />
                App Installations by Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {installations.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#0F1729]">
                        {item.country}
                      </span>
                      <span className="text-[#65758B]">{item.users}</span>
                    </div>
                    <div className="w-full bg-[#F1F5F9] rounded-full h-2">
                      <div
                        className="bg-[#4CA6EB] h-2 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Users Mood Distribution */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0F1729]">
                Users Mood Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8">
              <div className="relative w-64 h-64 mb-8">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  {moodData.map((item, index) => {
                    const prevPercentage = moodData
                      .slice(0, index)
                      .reduce((sum, d) => sum + d.percentage, 0);
                    const circumference = 2 * Math.PI * 70;
                    const strokeDasharray = `${
                      (item.percentage / 100) * circumference
                    } ${circumference}`;
                    const strokeDashoffset = -(
                      (prevPercentage / 100) *
                      circumference
                    );

                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke={item.hex}
                        strokeWidth="30"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="butt"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {moodData.map((item, index) => (
                  <div
                    key={index}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                      item.mood === "Great"
                        ? "bg-[#16A2491A] text-[#16A249]"
                        : item.mood === "Good"
                        ? "bg-[#3AE4781A] text-[#3AE478]"
                        : item.mood === "Okay"
                        ? "bg-[#F59F0A1A] text-[#F59F0A]"
                        : item.mood === "Low"
                        ? "bg-[#EF43431A] text-[#EF4343]"
                        : "bg-[#BC10101A] text-[#BC1010]"
                    }`}>
                    {item.mood}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Top Supplements */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0F1729]">
                Top Supplements (30 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b text-xs font-medium text-[#94A3B8] uppercase">
                  <div>Supplement Name</div>
                  <div className="text-center">Users</div>
                  <div className="text-right">Trend</div>
                </div>
                {supplements.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="text-sm font-medium text-[##0F172A]">
                      {item.name}
                    </div>
                    <div className="text-sm text-[#475569] text-center">
                      {item.users}
                    </div>
                    <div className={`text-xs font-medium text-right `}>
                      <span
                        className={`px-1.5 py-1 rounded-[9999px] ${
                          item.trendUp
                            ? "text-[#059669] bg-[#ECFDF5]  "
                            : "text-[#E11D48] bg-[#FFF1F2]"
                        }`}>
                        {" "}
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          {/* <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0F1729]">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#334155] font-medium">
                        {item.text}
                      </p>
                      <p className="text-xs text-[#94A3B8] mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 flex items-center justify-center gap-1">
                  View All Activity →
                </button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
