'use client'
import { Heart, Sparkles, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AppLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex flex-col">
      {/* Header */}
      <header className="pt-12 px-6">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Heart size={36} className="text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Welcome to Dupple</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Where meaningful connections begin
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        {/* Feature Highlights */}
        <div className="mb-12 grid grid-cols-3 gap-6 w-full max-w-sm">
          {[
            { icon: <Sparkles size={20} />, text: "Smart Matching" },
            { icon: <Heart size={20} />, text: "Real People" },
            { icon: <Lock size={20} />, text: "Secure" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-600">{item.icon}</span>
              </div>
              <p className="text-xs text-gray-600 text-center">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Link
            href="/signup"
            className="flex w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition duration-300 items-center justify-center shadow-lg"
          >
            Create Account
            <ArrowRight className="ml-2" size={20} />
          </Link>
          
          <Link
            href="/login"
            className="w-full border border-gray-300 text-gray-700 px-6 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center"
          >
            Sign In
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-12 px-6 text-center">
        <p className="text-sm text-gray-500">
          By continuing, you agree to our <Link href="#" className="text-purple-600 hover:underline">Terms</Link> and <Link href="#" className="text-purple-600 hover:underline">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
}