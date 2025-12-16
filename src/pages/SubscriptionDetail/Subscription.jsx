import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Filter,
  DollarSign,
  Users,
  TrendingUp,
  CreditCard,
  MoveUp,
} from "lucide-react";

export default function SubscriptionsBilling() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Monthly Revenue",
      value: "$42,847",
      change: "+18.5%",
      icon: DollarSign,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Subscriptions",
      value: "2,156",
      change: "+17.3%",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Avg Revenue Per User",
      value: "$19.87",
      change: "+6.2%",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.8%",
      icon: CreditCard,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  const subscriptions = [
    {
      user: "John Smith",
      email: "john@example.com",
      status: "Active",
      amount: "$25.99",
      nextBilling: "2024-12-18",
    },
    {
      user: "Sarah Johnson",
      email: "sarah@example.com",
      status: "Active",
      amount: "$25.99",
      nextBilling: "2024-12-18",
    },
    {
      user: "Mike Davis",
      email: "mike@example.com",
      status: "Active",
      amount: "$25.99",
      nextBilling: "2024-12-18",
    },
    {
      user: "Emma Wilson",
      email: "emma@example.com",
      status: "Active",
      amount: "$25.99",
      nextBilling: "2024-12-18",
    },
    {
      user: "Alex Brown",
      email: "alex@example.com",
      status: "Active",
      amount: "$25.99",
      nextBilling: "2024-12-22",
    },
  ];

  return (
    <div className="min-h-screen font-rethink">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F1729] mb-2">
            Subscriptions & Billing
          </h1>
          <p className="text-[#65758B]">Manage plans and revenue</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm text-[#65758B] font-medium">
                    {stat.title}
                  </div>

                  <div
                    className={`p-2 rounded-[12px] bg-[#4DB1EA1A0] ${stat.iconBg}`}>
                    <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                </div>
                <div className="text-3xl  font-bold text-[#0F1729] mb-2">
                  {stat.value}
                </div>
                <div className="flex items-center text-[#16A249]">
                  <div>
                    <MoveUp size={12} />
                  </div>
                  <div className="text-sm  ">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Subscriptions Table */}
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#0F1729] mb-6">
              Active Subscriptions
            </h2>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by user name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm text-slate-900"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                <Filter className="w-4 h-4" />
                Filter
              </button> 
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 text-[#65758B] font-medium">
                    <th className="text-left py-3 px-4 text-sm  ">User</th>
                    <th className="text-left py-3 px-4 text-sm  ">Email</th>
                    <th className="text-left py-3 px-4 text-sm ">Status</th>
                    <th className="text-left py-3 px-4 text-sm ">Amount</th>
                    <th className="text-left py-3 px-4 text-sm ">
                      Next Billing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((sub, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium text-[#0F1729]">
                          {sub.user}
                        </span>
                      </td>
                      <td className="py-4 px-3">
                        <span className="text-sm text-[#65758B]">
                          {sub.email}
                        </span>
                      </td>
                      <td className="py-4 px-2 xl:px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#32D48E] text-white">
                          {sub.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-semibold text-[#0F1729]">
                          {sub.amount}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-[#65758B]">
                          {sub.nextBilling}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
