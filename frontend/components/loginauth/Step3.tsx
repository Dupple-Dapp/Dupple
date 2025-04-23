'use client'
import { useState } from 'react';
import { CheckCircle, ChevronRight, User, Mail, Lock, Calendar, Camera, MapPin } from 'lucide-react';

const Step3 = () => {

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
    
}

export default Step3