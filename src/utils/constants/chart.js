import { TrendingUp, MapPin, Activity, Package } from "lucide-react";


const activeUsersData = [
    { day: 1, users: 320 },
    { day: 3, users: 380 },
    { day: 5, users: 350 },
    { day: 7, users: 330 },
    { day: 10, users: 310 },
    { day: 12, users: 340 },
    { day: 15, users: 360 },
    { day: 17, users: 390 },
    { day: 20, users: 440 },
    { day: 22, users: 420 },
    { day: 25, users: 380 },
    { day: 27, users: 330 },
    { day: 30, users: 290 },
  ];

  const symptomsData = [
    { name: "Headache", value: 45 },
    { name: "Fatigue", value: 38 },
    { name: "Nausea", value: 30 },
    { name: "Dizziness", value: 27 },
    { name: "Insomnia", value: 22 },
  ];

  const installations = [
    { country: "United States", users: "3,942 users (75%)", percentage: 75 },
    { country: "United Kingdom", users: "2,194 users (22%)", percentage: 22 },
    { country: "Canada", users: "2,504 users (15%)", percentage: 15 },
    { country: "Australia", users: "3,642 users (78%)", percentage: 78 },
    { country: "Germany", users: "3,042 users (70%)", percentage: 70 },
  ];
  const supplements = [
    {
      name: "Magnesium Glycinate",
      users: "3,420",
      trend: "+23%",
      trendUp: true,
    },
    { name: "Vitamin D3", users: "2,893", trend: "+8%", trendUp: true },
    {
      name: "Creatine Monohydrate",
      users: "1,940",
      trend: "+9%",
      trendUp: true,
    },
    { name: "Ashwagandha", users: "1,340", trend: "-3%", trendUp: false },
    { name: "Omega-3 (Fish Oil)", users: "2,120", trend: "+3%", trendUp: true },
  ];

  const activities = [
    { text: "User completed daily check-in", time: "2m ago", icon: Activity },
    {
      text: "New device connected (Oura Ring)",
      time: "15m ago",
      icon: Package,
    },
    { text: "User completed daily check-in", time: "1h ago", icon: Activity },
    { text: "New supplement added to stack", time: "2h ago", icon: Package },
    { text: "Pro Subscription activated", time: "3h ago", icon: TrendingUp },
  ];

 const moodData = [
     { mood: "Great", color: "bg-green-600", percentage: 40, hex: "#16A249" },
     { mood: "Good", color: "bg-green-400", percentage: 30, hex: "#3AE478" },
     { mood: "Okay", color: "bg-yellow-500", percentage: 15, hex: "#F59F0A" },
     { mood: "Low", color: "bg-red-400", percentage: 10, hex: "#EF4343" },
     { mood: "Angry", color: "bg-red-600", percentage: 5, hex: "#BC1010" },
 ];

export {
    moodData, activities, supplements, installations, symptomsData, activeUsersData
}