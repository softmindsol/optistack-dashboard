import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';

export default function UsersManagement() {
    const [searchQuery, setSearchQuery] = useState('');

    const users = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            status: 'Active',
            lastActivity: '2 hours ago',
            stackCount: 3
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            status: 'Active',
            lastActivity: '1 day ago',
            stackCount: 5
        },
        {
            name: 'Mike Johnson',
            email: 'mike@example.com',
            status: 'Inactive',
            lastActivity: '3 days ago',
            stackCount: 2
        },
        {
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            status: 'Active',
            lastActivity: '5 hours ago',
            stackCount: 4
        },
        {
            name: 'Tom Brown',
            email: 'tom@example.com',
            status: 'Inactive',
            lastActivity: '1 week ago',
            stackCount: 1
        }
    ];

    return (
      <div className="  p-5  font-rethink">
        <div className="">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0F1729] mb-2">Users</h1>
            <p className="text-[#65758B]">
              Manage all users and their activity
            </p>
          </div>

          {/* Card Container */}
          <Card className="border border-slate-200">
            <CardContent className="p-6">
              {/* Search and Filter */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#E5E7EB] border border-slate-200 rounded-lg focus:outline-none focus:ring-2   focus:border-transparent text-sm"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#E5E7EB] border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 text-[#65758B]">
                      <th className="text-left py-3 px-4 text-sm font-semibold ">
                        Name
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold ">
                        Email
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold ">
                        Status
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold ">
                        Last Activity
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold">
                        Stack Count
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4">
                          <span className="text-sm font-medium text-[#0F1729]">
                            {user.name}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-sm text-[#65758B]">
                            {user.email}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              user.status === "Active"
                                ? "bg-[#32D48E] text-[#FFFFFF]"
                                : "bg-[#F3F4F6] text-[#65758B]"
                            }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-sm text-[#65758B]">
                            {user.lastActivity}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center ">
                          <span className="text-sm font-medium text-[#0F1729]">
                            {user.stackCount}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="text-sm font-medium text-[#0F1729] rounded-[10px] bg-[#E5E7EB] border border-[#F6F7F8] p-2 hover:text-[#0F1729] transition-colors">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                <span className="text-sm text-[#64748B]">
                  Showing 5 of 42 results
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-[#64748B] rounded-[10px] bg-[#E5E7EB] border border-[#F6F7F8] hover:text-[#0F1729] transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-[#64748B] rounded-[10px] bg-[#E5E7EB] border border-[#F6F7F8] hover:text-[#0F1729] transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}