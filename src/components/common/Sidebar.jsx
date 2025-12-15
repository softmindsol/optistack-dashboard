import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PATHS from "../../routes/path";
import {
  LayoutGrid,
  Users,
  CreditCard,
  TrendingUp,
  Settings,
  Menu,
  X,
} from "lucide-react";
import Header from "./Header";

export default function Sidebar({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutGrid, path: PATHS.dashboard },
    { name: "Users", icon: Users, path: PATHS.users },
    { name: "Subscriptions", icon: CreditCard, path: PATHS.subscriptions },
    {
      name: "Supplement Insights",
      icon: TrendingUp,
      path: PATHS.supplementInsights,
    },
    { name: "Settings", icon: Settings, path: PATHS.settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`${isMobileMenuOpen ? "hidden" : ""} lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg`}>
        {isMobileMenuOpen ? (
          <X className="w-6 h-6  text-[#202124]" />
        ) : (
          <Menu className="w-6 h-6 text-[#202124]" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 h-full
          bg-gradient-to-b from-[#4CA6EB] to-[#3b8fc9]
          transition-transform duration-300 ease-in-out font-rethink
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-[19.5px] border-b border-white border-opacity-20">
            <h1 className="text-2xl font-bold text-white">SuppTrackr</h1>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-9  space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    w-full flex items-center font-semibold gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-white text-[#131313] shadow-lg"
                        : "text-white hover:bg-white hover:bg-opacity-10"
                    }
                  `}>
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <div className="flex-1 p-4 lg:p-8 overflow-auto">
          <div className=" ">{children}</div>
        </div>
      </main>
    </div>
  );
}
