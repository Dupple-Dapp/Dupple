import { useState } from "react";
import { SignIn } from "@/components/SignIn";
import { VerifyBlock } from "@/components/Verify";
import { PayBlock } from "@/components/Pay";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-purple-700 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Connect</h1>
            <span className="text-pink-300 ml-1 text-3xl">&hearts;</span>
          </div>
          <button 
            onClick={() => setShowSignup(true)}
            className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Match Today</h2>
            <p className="text-xl mb-8">Join thousands of singles looking for meaningful connections. Your perfect match could be just a click away.</p>
            <button 
              onClick={() => setShowSignup(true)}
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition shadow-lg"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Image placeholders - you'll replace these with your local images */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-purple-200 flex items-center justify-center">
              <p className="text-purple-700 font-medium">Profile Image 1</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-purple-200 flex items-center justify-center">
              <p className="text-purple-700 font-medium">Profile Image 2</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-purple-200 flex items-center justify-center">
              <p className="text-purple-700 font-medium">Profile Image 3</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-purple-200 flex items-center justify-center">
              <p className="text-purple-700 font-medium">Profile Image 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Create Your Profile</h3>
              <p className="text-gray-600">Sign up and create your profile in minutes. Add your best photos and tell us about yourself.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Browse Matches</h3>
              <p className="text-gray-600">Our algorithm will find your most compatible matches. Browse profiles and find someone special.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect & Chat</h3>
              <p className="text-gray-600">Start conversations with your matches and see where the connection takes you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Profiles */}
      <div className="py-16 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Featured Singles</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Join our community of amazing singles. Here is just a small sample of the incredible people waiting to meet you.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Profile placeholders - you'll replace these with your local images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-purple-200 flex items-center justify-center">
                  <p className="text-purple-700 font-medium">Profile {index}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">User Name, 28</h3>
                  <p className="text-gray-600 text-sm">Location</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {/* Couple image placeholder */}
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mr-4">
                    <p className="text-purple-700 text-xs">Couple {index}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sarah & Mike</h3>
                    <p className="text-gray-600 text-sm">Matched 8 months ago</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">We never would have met if it was not for this app! Now we are planning our future together.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8">Join our community of singles today and start your journey to meaningful connections.</p>
          <button 
            onClick={() => setShowSignup(true)}
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition shadow-lg"
          >
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="flex justify-center mb-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-purple-700">Connect</h1>
                <span className="text-pink-500 ml-1 text-3xl">&hearts;</span>
              </div>
            </div>
            
            <SignIn />
            <VerifyBlock />
            <PayBlock />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold">Connect</h2>
                <span className="text-pink-400 ml-1 text-2xl">&hearts;</span>
              </div>
              <p className="text-gray-400 max-w-xs">Find meaningful connections with singles in your area.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Dating Tips</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}