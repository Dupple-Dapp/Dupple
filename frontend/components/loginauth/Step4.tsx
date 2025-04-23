"use client";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  User,
  Mail,
  Lock,
  Calendar,
  Camera,
  MapPin,
} from "lucide-react";

const Step4 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
    lookingFor: "",
    location: "",
    bio: "",
    profileImage: null,
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
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Profile photo</h2>
      <p className="text-gray-600">
        Add at least one photo to make your profile shine
      </p>

      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            <Camera className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Upload main photo</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          This will be your primary profile photo
        </p>

        <div className="pt-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Additional photos
          </h3>
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
};

export default Step4;
