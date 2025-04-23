"use client";
import { useState } from "react";
import { SignIn } from "@/components/SignIn";
import { VerifyBlock } from "@/components/Verify";
import { PayBlock } from "@/components/Pay";
import Image from "next/image";
import Register from "./register/page";
import RegistrationPage from "./login/page";

export default function Home() {
  // const [showSignup, setShowSignup] = useState(false);
  const people = ["/person.jpg"];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">Duple</h1>
          </div>
          {/* <button
            onClick={() => setShowSignup(true)}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
          > */}
          {/* Get Started */}

          <Register />
          {/* </button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your Perfect Connection
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our community of singles looking for meaningful
                relationships. Your journey starts here.
              </p>
              {/* <button
                onClick={() => setShowSignup(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:from-purple-700 hover:to-purple-600 transition"
              > */}
              {/* Join Now */}
              {/* <button onClick={() => <RegistrationPage/>}>
                Set up your account
              </button> */}
              <SignIn />

              <Register />
              {/* </button> */}
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {/* Image placeholders - replace with your actual images */}
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <Image
                  src={"/person.jpg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <Image
                  src={"/person.jpg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <Image
                  src={"/person.jpg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <Image
                  src={"/person.jpg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create Your Profile
              </h3>
              <p className="text-gray-600">
                Sign up in minutes and create a profile that showcases your
                personality.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Discover Matches
              </h3>
              <p className="text-gray-600">
                Our smart algorithm helps you find compatible matches based on
                your preferences.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect & Meet
              </h3>
              <p className="text-gray-600">
                Start conversations, build connections, and meet in person when
                you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Meet Amazing Singles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our community is filled with interesting, like-minded individuals
            looking for genuine connections.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Profile placeholders - replace with your actual images */}
            {people.map((person) => (
              <div
                key={person}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image
                    src={person}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Name, 28</h3>
                  <p className="text-gray-500 text-sm">City, State</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Modal */}
      {/* {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Join Duple</h2>
              <p className="text-gray-600">
                Create your account to get started
              </p>
            </div>

             <SignIn /> 
           <VerifyBlock /> 
            <PayBlock />
            <Register />
          </div>
        </div>
      )}  */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Duple</h3>
              <p className="text-gray-400">
                Find genuine connections with like-minded singles.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dating Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Safety Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Duple. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
