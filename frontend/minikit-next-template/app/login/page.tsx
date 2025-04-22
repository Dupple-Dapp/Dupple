'use client'
import { useState } from 'react';
import { CheckCircle, ChevronRight, User, Mail, Lock, Calendar, Camera, MapPin } from 'lucide-react';

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    gender: '',
    lookingFor: '',
    location: '',
    bio: '',
    profileImage: null
  });

  const totalSteps = 4;

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center relative">
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === step;
            const isCompleted = stepNum < step;

            return (
              <div key={stepNum} className="flex flex-col items-center relative z-10">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${isActive ? 'border-purple-600 bg-purple-50 text-purple-600' : 
                    isCompleted ? 'border-purple-600 bg-purple-600 text-white' : 
                    'border-gray-300 bg-white text-gray-400'}`}
                >
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                <span 
                  className={`text-xs mt-2 font-medium
                  ${isActive ? 'text-purple-600' : 
                    isCompleted ? 'text-purple-600' : 'text-gray-400'}`}
                >
                  {stepNum === 1 ? 'Account' : 
                   stepNum === 2 ? 'Personal' : 
                   stepNum === 3 ? 'Profile' : 'Photos'}
                </span>
              </div>
            );
          })}
          
          {/* Progress bar */}
          <div className="absolute top-5 h-1 w-full bg-gray-200 -z-10">
            <div 
              className="h-full bg-purple-600 transition-all duration-300" 
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
            <p className="text-gray-600">Let's get started with your basic account information</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                      placeholder="Your first name"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="Create a secure password"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long with a number and special character</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Personal details</h2>
            <p className="text-gray-600">Tell us a bit about yourself</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => updateFormData('birthdate', e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">You must be at least 18 years old to use Dupple</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Looking for</label>
                <select
                  value={formData.lookingFor}
                  onChange={(e) => updateFormData('lookingFor', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value="" disabled>I'm interested in</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="everyone">Everyone</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="Your city"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">About you</h2>
            <p className="text-gray-600">Let others know what makes you unique</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => updateFormData('bio', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 h-32"
                  placeholder="Tell potential matches about yourself, your interests, and what you're looking for..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  <span className={formData.bio.length > 300 ? 'text-red-500' : ''}>
                    {formData.bio.length}
                  </span>/300 characters
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your interests (select at least 3)</label>
                <div className="flex flex-wrap gap-2">
                  {['Travel', 'Food', 'Music', 'Sports', 'Movies', 'Reading', 'Art', 'Photography', 'Fitness', 'Gaming', 'Cooking', 'Nature'].map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      className="py-1 px-3 rounded-full border border-gray-300 hover:bg-purple-50 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Profile photo</h2>
            <p className="text-gray-600">Add at least one photo to make your profile shine</p>
            
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                  <Camera className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload main photo</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-600">This will be your primary profile photo</p>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Additional photos</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="aspect-square rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
                    >
                      <Camera className="w-6 h-6 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-500">Add photo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600">
            dupple
          </h1>
        </div>
        
        {renderStepIndicator()}
        
        <form className="mt-8">
          {renderStep()}
          
          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            <button
              type="button"
              onClick={step === totalSteps ? () => alert('Form submitted successfully!') : nextStep}
              className="py-2 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 flex items-center"
            >
              {step === totalSteps ? 'Complete' : 'Continue'}
              {step !== totalSteps && <ChevronRight className="ml-1 w-4 h-4" />}
            </button>
          </div>
        </form>
        
        {step === 1 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Sign in
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}