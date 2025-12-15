import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount] = useState(1);

  return (
    <header
      className="bg-[#ffff] px-4 sm:px-6 lg:px-8 py-3"
      style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl pl-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 h-12 bg-[#F3F4F6] border-0 rounded-full shadow-sm focus:ring-2 focus:ring-[#E5E7EB] text-[#202124] placeholder:text-gray-400"
              style={{ fontFamily: "Poppins, sans-serif" }}
            />
          </div>
        </div>

        {/* Right Side - Notification & User */}
        <div className="flex items-center gap-6">
          {/* Notification Bell */}
          <button className="relative">
            <Bell className="w-6 h-6 text-[#202124]" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-[2px] w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          <div className="w-[1px] h-8 rounded-full bg-[#E5E7EB]" />
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-[#202124] leading-tight">
                Admin User
              </p>
              <p className="text-xs text-gray-500">admin@dashboard.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
