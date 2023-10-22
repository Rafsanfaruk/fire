"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Group Chat-cuate 1.svg";
import { Eye } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import pic from '../../../public/a.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Use the useToast hook to get the toast function
  const { toast } = useToast();

  const handleLogin = () => {
    // Implement your login logic here
    if (email === "your@email.com" && password === "yourpassword") {
      // Successful login
      console.log("Login successful.");
    } else {
      // Display a failure message using the toaster
      toast("Invalid email or password", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-screen-lg mx-4 flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 relative">
        <div className="md:w-1/2 text-center md:text-left">
          <Image src={logo} alt="Your Logo" width={400} height={400} />
          <div className="text-center mt-5 mb-5">
            <h1 className="text-2xl   font-bold">Join Community</h1>
            <p>
              Join millions of communities around the world and connect with
              each other
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>About</p>
            </div>
            <div>Term & Condition</div>
            <div>Privacy Policy</div>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          
           <div className="flex items-center justify-center mb-2 mt-10">
           <Image src={pic} alt="Your Logo" width={50} height={50} />
            <h1 className="text-3xl text-center">Fire</h1>
           </div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Eye size={24} />
            </button>
          </div>
          <Button onClick={handleLogin}>Login</Button>
          <p className="mt-4">Remember Me</p>
          <p>Forgot Password</p>
        </div>
        {/* Toaster container */}
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
