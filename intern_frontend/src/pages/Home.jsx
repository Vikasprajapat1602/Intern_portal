import React from "react";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <h1 className="text-4xl font-bold text-weight-700"></h1>
      </div>
    </>
  );
}
