"use client";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Step1 from "@/components/loginauth/Step1";
import Step2 from "@/components/loginauth/Step2";
import Step3 from "@/components/loginauth/Step3";
import Step4 from "@/components/loginauth/Step4";

export default function RegistrationPage() {
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

  const updateFormData = (
    field: keyof FormData,
    value: string | File | null
  ) => {
    setFormData({
      ...formData,
      [field]: value,
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
              <div
                key={stepNum}
                className="flex flex-col items-center relative z-10"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${
                    isActive
                      ? "border-purple-600 bg-purple-50 text-purple-600"
                      : isCompleted
                      ? "border-purple-600 bg-purple-600 text-white"
                      : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                <span
                  className={`text-xs mt-2 font-medium
                  ${
                    isActive
                      ? "text-purple-600"
                      : isCompleted
                      ? "text-purple-600"
                      : "text-gray-400"
                  }`}
                >
                  {stepNum === 1
                    ? "Account"
                    : stepNum === 2
                    ? "Personal"
                    : stepNum === 3
                    ? "Profile"
                    : "Photos"}
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
        <Step1 />;

      case 2:
        <Step2 />;
      case 3:
        <Step3 />;
      case 4:
        <Step4 />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600">dupple</h1>
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
              onClick={
                step === totalSteps
                  ? () => alert("Form submitted successfully!")
                  : nextStep
              }
              className="py-2 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 flex items-center"
            >
              {step === totalSteps ? "Complete" : "Continue"}
              {step !== totalSteps && <ChevronRight className="ml-1 w-4 h-4" />}
            </button>
          </div>
        </form>

        {step === 1 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign in
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
