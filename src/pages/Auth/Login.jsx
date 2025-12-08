import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logo } from "@/assets";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("balamia@gmail.com");
  const [password, setPassword] = useState("");
const navigate=useNavigate()
  const handleSubmit = () => {
    navigate('/dashboard')
    console.log("Login submitted", { email, password });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center !bg-[#4CA6EB]"
      //   style={{
      //     background: "linear-gradient(35deg, #1B2966 0%, #137DC5 38%)",
      //   }}
    >
      <div className="w-[90%] h-[540px] sm:w-[540px] sm:h-[601px] bg-white  rounded-[9.17px] shadow-2xl p-8 sm:p-10">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Logo and Header */}
          <div className="flex justify-center items-center gap-3 mb-8 w-full b">
            <div className="w-16 h-16 rounded-full  flex items-center justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-2xl sm:text-[26px] font-semibold text-[#202124] mb-1 font-poppins">
                SUPPTRACKR
              </h1>
              <p className="text-[12px] text-[#6B7280] tracking-wide font-poppins">
                TRACK & OPTIMIZE
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6  w-full">
            <h2 className="text-xl sm:text-[28px] font-semibold text-center text-[#202124] mb-6 font-rethink">
              Login to your account
            </h2>

            <div className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#131313] font-rethink">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-[#202124] border-[1px] border- rounded-[8px] font-rethink focus:border-[#4CA6EB] focus:ring-[#D1E9FF]"
                  placeholder="balamia@gmail.com"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label
                    htmlFor="password"
                    className="text-[#202124] font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    Password
                  </Label>
                  <button
                    onClick={() => console.log("Forgot password")}
                    className=" text-[#1570EF] hover:underline font-rethink">
                    Forgot ?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10 text-[#202124] border-gray-300 focus:border-[#4CA6EB] focus:ring-[#4CA6EB]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 text-[#FCFCFD] font-semibold font-rethink text-base hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#4CA6EB",
                }}
                
                >
                Login now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
