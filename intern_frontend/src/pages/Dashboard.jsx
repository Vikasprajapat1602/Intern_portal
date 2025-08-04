import React, { useEffect, useState } from "react";
import RewardsSection from "../components/RewardsSection";

const Dashboard = () => {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/data/")
      .then((res) => res.json())
      .then((data) => setInternData(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!internData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white gap-8 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-center text-white">Intern Dashboard</h1>
        <div className="space-y-2 text-lg">
          <p><span className="font-semibold text-blue-300">Name:</span> {internData.name}</p>
          <p><span className="font-semibold text-blue-300">Referral Code:</span> {internData.referral_code}</p>
          <p><span className="font-semibold text-blue-300">Total Donations:</span> ₹{internData.donation_amount}</p>
        </div>
      </div>
      
      {/* Rewards section below dashboard card */}
      <RewardsSection />
    </div>
  );
};

export default Dashboard;
