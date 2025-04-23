'use client'
import { useState } from 'react';
import { CheckCircle, ChevronRight, User, Mail, Lock, Calendar, Camera, MapPin } from 'lucide-react';

const Step2 = () => {

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
   
     interface FormData {
       firstName: string;
       lastName: string;
       email: string;
       password: string;
       confirmPassword: string;
       birthdate: string;
       gender: string;
       lookingFor: string;
       location: string;
       bio: string;
       profileImage: File | null;
     }
  
     type UpdateFormData = (field: keyof FormData, value: any) => void;
  
     const updateFormData: UpdateFormData = (field, value) => {
       setFormData({
         ...formData,
         [field]: value
       });
     };
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
              <option value="" disabled>I am interested in</option>
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
  
}

export default Step2