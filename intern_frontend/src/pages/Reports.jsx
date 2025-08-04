import React from "react";

const Reports = () => {
  const dummyData = [
    { rank: 1, name: "Vikas", code: "vikas2025", donation: 1200 },
    { rank: 2, name: "Aarav", code: "aarav2025", donation: 950 },
    { rank: 3, name: "Isha", code: "isha2025", donation: 700 },
    { rank: 4, name: "Riya", code: "riya2025", donation: 500 },
    { rank: 5, name: "Kabir", code: "kabir2025", donation: 300 }
  ];

  // Top user
  const topReferrer = dummyData[0];
  const totalDonations = dummyData.reduce((sum, user) => sum + user.donation, 0);
  const totalUsers = dummyData.length;

  return (
    <div className="p-6 w-full text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Reports Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold mb-2">Total Donations</h3>
          <p className="text-3xl font-bold text-green-400">₹{totalDonations}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold mb-2">Top Referrer</h3>
          <p className="text-3xl font-bold text-indigo-400">{topReferrer.code}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-yellow-400">{totalUsers}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/5 rounded-xl p-4 overflow-auto shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b border-white/20">
            <tr className="text-sm text-gray-300">
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Referral Code</th>
              <th className="p-3">Donations (₹)</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} className="hover:bg-white/10 transition">
                <td className="p-3 font-bold text-lg">{user.rank}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3 text-indigo-300">{user.code}</td>
                <td className="p-3 text-green-300">{user.donation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
