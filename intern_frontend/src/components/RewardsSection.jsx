import React from "react";

const rewards = [
  { title: "Certificate", description: "Get a certificate after completion." },
  { title: "Leaderboard Access", description: "Get featured on the leaderboard." },
  { title: "Internship Offer", description: "Chance to earn internship offers." }
];

const RewardsSection = () => {
  return (
    <div className="mt-8 w-full max-w-4xl px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">🎁 Rewards & Unlockables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-xl p-6 shadow-md text-white
                       transition transform duration-300 
                       hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
            <p className="text-gray-300 text-sm">{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
