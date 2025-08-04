import React from "react";

const Settings = () => {
  return (
    <div className="p-6 w-full text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Account Settings</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* User Info */}
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Vikas Prajapat"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                defaultValue="vikas@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded-xl text-lg shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
