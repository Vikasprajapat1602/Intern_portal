import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const dummyData = [
      { rank: 1, name: "Vikas", code: "vikas2025", donation: 1200 },
      { rank: 2, name: "Aarav", code: "aarav2025", donation: 950 },
      { rank: 3, name: "Isha", code: "isha2025", donation: 700 },
      { rank: 4, name: "Riya", code: "riya2025", donation: 500 },
      { rank: 5, name: "Kabir", code: "kabir2025", donation: 300 }
    ];
    setLeaderboardData(dummyData);
  }, []);

  return (
    <div className="p-6 w-full text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-semibold">Rank</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Referral Code</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Total Donations</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className="border-b border-white/20 hover:bg-white/5 transition">
                <td className="px-6 py-4">{entry.rank}</td>
                <td className="px-6 py-4">{entry.name}</td>
                <td className="px-6 py-4">{entry.code}</td>
                <td className="px-6 py-4">₹{entry.donation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
