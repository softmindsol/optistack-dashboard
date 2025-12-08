import React from "react";
import { Users, Monitor, CheckCircle, Package } from "lucide-react";
import Activities from "./Activities";

export default function Dashboard() {
  const statsCards = [
    {
      title: "Total Users",
      value: "520",
      change: "↑ 8.5% from last week",
      changePositive: true,
      icon: Users,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "AI Scans Today",
      value: "34",
      change: "↑ 13.5% from yesterday",
      changePositive: true,
      icon: Monitor,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Daily Check-Ins",
      value: "487",
      change: "↑ 70.5% completion",
      changePositive: true,
      icon: CheckCircle,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
    },
    {
      title: "App Installs",
      value: "9,087",
      change: "↑ +60",
      changePositive: true,
      icon: Package,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen font-rethink text-[#0F1729] ">
      <div className="w-full ">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold  mb-1">Dashboard</h1>
          <p className="text-sm text-[#65758B]">
            Welcome back, here's your overview
          </p> 
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                {/* Header with Title and Icon */}
                <div className="flex items-start justify-between mb-4">
                  <p className="text-sm text-[#65758B] font-medium">
                    {card.title}
                  </p>
                  <div
                    className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <p className="text-3xl font-bold text-[#202124]">
                    {card.value}
                  </p>
                </div>

                {/* Change Indicator */}
                <div className="flex items-center gap-1">
                  <p
                    className={`text-xs font-medium ${
                      card.changePositive ? "text-green-600" : "text-red-600"
                    }`}>
                    {card.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Activities />
    </div>
  );
}
