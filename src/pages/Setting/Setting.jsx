import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Bell, X, Mail, ChevronDown } from "lucide-react";

export default function SettingsApp() {
  const [currentPage, setCurrentPage] = useState("general");
  const [wearableEnabled, setWearableEnabled] = useState(true);
  const [researchMode, setResearchMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Analyst (View Data)");

  const menuItems = [
    { id: "general", icon: Building2, label: "General Settings" },
    { id: "team", icon: Users, label: "Team & Roles" },
    { id: "notifications", icon: Bell, label: "Notifications" },
  ];

  const handleSendInvitation = () => {
    console.log("Sending invitation:", { fullName, email, role });
    setShowInviteModal(false);
    setFullName("");
    setEmail("");
    setRole("Analyst (View Data)");
  };

  return (
    <div className="min-h-screen font-rethink bg-[#FFFFFF] rounded-[12px] py-6 px-5 border ">
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-5 xl:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 ">
            <div className="mb-4">
              <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3">
                Configuration
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5  rounded-[8px] hover:shadow-sm hover:shadow-[#0000000D] text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? "bg-[#FFFFFF] text-[#0284C7] border-[1px] border-[#E2E8F0] shadow-sm shadow-[#0000000D]"
                        : "text-[#64748B] hover:bg-slate-100"
                    }`}>
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* General Settings Page */}
            {currentPage === "general" && (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
                    General Settings
                  </h1>
                  <p className="text-[#64748B]">
                    Manage your platform settings and preferences.
                  </p>
                </div>

                <Card className="bg-white border border-slate-200 shadow-sm mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-[#0F172A]">
                        Organization Info
                      </h2>
                      <button className="text-sm font-medium text-[#0284C7] hover:text-[#0284C7]">
                        Edit Details
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                          Organization Name
                        </label>
                        <input
                          type="text"
                          value="SuppTrackr Inc."
                          disabled
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                          Admin Email
                        </label>
                        <input
                          type="email"
                          value="admin@supptrackr.com"
                          disabled
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                        Support Contact
                      </label>
                      <input
                        type="email"
                        value="support@supptrackr.com"
                        disabled
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-[#64748B] mb-6">
                      Platform Behavior
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#0F172A] mb-1">
                            Enable Wearable Integrations
                          </h3>
                          <p className="text-sm text-[#64748B]">
                            Allow users to connect Oura, Apple Health, etc.
                          </p>
                        </div>
                        <button
                          onClick={() => setWearableEnabled(!wearableEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            wearableEnabled ? "bg-[#4CA6EB]" : "bg-gray-300"
                          }`}>
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              wearableEnabled
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-start justify-between pt-6 border-t border-slate-200">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#0F172A] mb-1">
                            Research Mode Anonymization
                          </h3>
                          <p className="text-sm text-[#64748B]">
                            Automatically strip PII from exported datasets.
                          </p>
                        </div>
                        <button
                          onClick={() => setResearchMode(!researchMode)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            researchMode ? "bg-[#4CA6EB]" : "bg-transparent"
                          }`}>
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              researchMode ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Team & Roles Page */}
            {currentPage === "team" && (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Team & Roles
                  </h1>
                  <p className="text-[#64748B]">
                    Manage team members and their permissions.
                  </p>
                </div>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        No team members yet
                      </h3>
                      <p className="text-sm text-slate-600 mb-6">
                        Get started by inviting your first team member
                      </p>
                      <button
                        onClick={() => setShowInviteModal(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Invite Team Member
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Notifications Page */}
            {currentPage === "notifications" && (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Notification Settings
                  </h1>
                  <p className="text-[#64748B]">
                    Manage your notification preferences.
                  </p>
                </div>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[#0F172A] mb-1">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-[#64748B]">
                          Receive all app notifications
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          pushNotifications ? "bg-[#4CA6EB]" : "bg-slate-300"
                        }`}>
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            pushNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>

      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity">
          <div className="bg-white shadow-2xl max-w-[500px] w-full rounded-[16px] overflow-hidden transform transition-all">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-semibold text-[#0F172A]">
                Invite Team Member
              </h2>
              <button
                onClick={() => setShowInviteModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors bg-transparent p-1 rounded-full hover:bg-slate-50">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Dr. Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#4CA6EB]/20 focus:border-[#4CA6EB] text-sm transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="jane@supptrackr.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#4CA6EB]/20 focus:border-[#4CA6EB] text-sm transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">
                  Role
                </label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 text-[#334155] text-sm border border-slate-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#4CA6EB]/20 focus:border-[#4CA6EB] bg-white transition-all appearance-none pr-10">
                    <option>Analyst (View Data)</option>
                    <option>Editor (Manage Content)</option>
                    <option>Admin (Full Access)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
                <p className="text-[13px] text-[#64748B] mt-2.5 leading-relaxed">
                  Analysts can view aggregated insights but cannot change
                  platform settings.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#F8FAFC] border-t border-slate-100">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-5 py-2.5 text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors">
                Cancel
              </button>
              <button
                onClick={handleSendInvitation}
                className="px-6 py-2.5 bg-[#4CA6EB] text-white rounded-[10px] text-sm font-semibold hover:bg-[#3B82F6] transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
