"use client";

import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  User,
  Camera,
  Droplet,
  Flame,
  Ruler,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useRegisterUser } from "@/src/hooks/useRegisterUser";
import { AccountStatus } from "@/src/components/smartAccount";

const Enums = {
  RelationshipStatus: {
    Single: 0,
    InRelationship: 1,
    Married: 2,
    Complicated: 3,
    OpenRelationship: 4,
  },
  ReasonForJoining: {
    Dating: 0,
    Friendship: 1,
    Networking: 2,
    Casual: 3,
  },
  Drinking: {
    Never: 0,
    Occasionally: 1,
    Socially: 2,
    Regularly: 3,
  },
  Smoking: {
    Never: 0,
    Occasionally: 1,
    Socially: 2,
    Regularly: 3,
  },
  Gender: {
    Male: 0,
    Female: 1,
    NonBinary: 2,
    Other: 3,
  },
};

export default function RegistrationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { RegisterUser, isPending } = useRegisterUser();

  const [formData, setFormData] = useState({
    ens: "",
    description: "",
    profilePic: "",
    gender: Enums.Gender.Male,
    interestedIn: Enums.Gender.Female,
    relationshipStatus: Enums.RelationshipStatus.Single,
    height: 3,
    selectedHobbies: [] as number[],
    reasonForJoining: Enums.ReasonForJoining.Dating,
    drinking: Enums.Drinking.Socially,
    smoking: Enums.Smoking.Never,
  });

  const allowedHobbies = [
    "Reading",
    "Gaming",
    "Cooking",
    "Sports",
    "Music",
    "Travel",
    "Relaxing",
    "Football",
    "Barbecues",
    "Cuddles",
    "Meeting people",
    "Tennis",
    "Writing",
    "Horror",
    "Coffee",
    "Baking",
    "Hiking",
    "Gardening",
    "Foodie",
    "Skiing",
    "Museums and galleries",
    "Wine",
    "Art",
    "Coding",
    "Festivals",
  ];

  const totalSteps = 4;

  const updateFormData = (field: keyof typeof formData, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const toggleHobby = (hobby: string) => {
    const hobbyIndex = allowedHobbies.indexOf(hobby);
    if (hobbyIndex === -1) return;

    const currentHobbies = [...formData.selectedHobbies];
    const hobbyIndexInSelected = currentHobbies.indexOf(hobbyIndex);

    if (hobbyIndexInSelected === -1) {
      currentHobbies.push(hobbyIndex);
    } else {
      currentHobbies.splice(hobbyIndexInSelected, 1);
    }

    updateFormData("selectedHobbies", currentHobbies);
  };

  const isHobbySelected = (hobby: string) => {
    const hobbyIndex = allowedHobbies.indexOf(hobby);
    return formData.selectedHobbies.includes(hobbyIndex);
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (isPending) return;

    try {
      if (
        !formData.ens ||
        !formData.description ||
        formData.selectedHobbies.length === 0
      ) {
        toast.error("Please fill all required fields");
        return;
      }

      console.log("FormData:", formData);

      await toast.promise(
        RegisterUser(
          formData.ens,
          formData.description,
          formData.profilePic,
          formData.interestedIn,
          formData.gender,
          formData.relationshipStatus,
          formData.height,
          formData.selectedHobbies,
          formData.reasonForJoining,
          formData.drinking,
          formData.smoking
        ),
        {
          loading: "Registering your profile...",
          success: "Profile registered successfully!",
          error: (err) => {
            console.error("Registration error:", err);
            return "Registration failed. Please check console for details.";
          },
        }
      );

      router.push("/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <Toaster position="top-right" reverseOrder={false} />
        <AccountStatus />;
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
                    ? "Profile"
                    : stepNum === 2
                    ? "Preferences"
                    : stepNum === 3
                    ? "Interests"
                    : "Photos"}
                </span>
              </div>
            );
          })}

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
            <h2 className="text-2xl font-bold text-gray-800">
              Create your profile
            </h2>
            <p className="text-gray-600">
              Let's get started with your basic profile information
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ENS Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.ens}
                    onChange={(e) => updateFormData("ens", e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    placeholder="Your ENS name or username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    updateFormData("gender", parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.Gender.Male}>Male</option>
                  <option value={Enums.Gender.Female}>Female</option>
                  <option value={Enums.Gender.NonBinary}>Non-binary</option>
                  <option value={Enums.Gender.Other}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Looking for
                </label>
                <select
                  value={formData.interestedIn}
                  onChange={(e) =>
                    updateFormData("interestedIn", parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.Gender.Male}>Men</option>
                  <option value={Enums.Gender.Female}>Women</option>
                  <option value={Enums.Gender.NonBinary}>
                    Non-binary people
                  </option>
                  <option value={Enums.Gender.Other}>Everyone</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relationship Status
                </label>
                <select
                  value={formData.relationshipStatus}
                  onChange={(e) =>
                    updateFormData(
                      "relationshipStatus",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.RelationshipStatus.Single}>
                    Single
                  </option>
                  <option value={Enums.RelationshipStatus.InRelationship}>
                    In a relationship
                  </option>
                  <option value={Enums.RelationshipStatus.Married}>
                    Married
                  </option>
                  <option value={Enums.RelationshipStatus.Complicated}>
                    It's complicated
                  </option>
                  <option value={Enums.RelationshipStatus.OpenRelationship}>
                    Open relationship
                  </option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Your preferences
            </h2>
            <p className="text-gray-600">Tell us about your lifestyle</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for joining
                </label>
                <select
                  value={formData.reasonForJoining}
                  onChange={(e) =>
                    updateFormData("reasonForJoining", parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.ReasonForJoining.Dating}>Dating</option>
                  <option value={Enums.ReasonForJoining.Friendship}>
                    Friendship
                  </option>
                  <option value={Enums.ReasonForJoining.Networking}>
                    Networking
                  </option>
                  <option value={Enums.ReasonForJoining.Casual}>Casual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Droplet className="inline w-4 h-4 mr-1" /> Drinking habits
                </label>
                <select
                  value={formData.drinking}
                  onChange={(e) =>
                    updateFormData("drinking", parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.Drinking.Never}>Never</option>
                  <option value={Enums.Drinking.Occasionally}>
                    Occasionally
                  </option>
                  <option value={Enums.Drinking.Socially}>Socially</option>
                  <option value={Enums.Drinking.Regularly}>Regularly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Flame className="inline w-4 h-4 mr-1" /> Smoking habits
                </label>
                <select
                  value={formData.smoking}
                  onChange={(e) =>
                    updateFormData("smoking", parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                >
                  <option value={Enums.Smoking.Never}>Never</option>
                  <option value={Enums.Smoking.Occasionally}>
                    Occasionally
                  </option>
                  <option value={Enums.Smoking.Socially}>Socially</option>
                  <option value={Enums.Smoking.Regularly}>Regularly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Ruler className="inline w-4 h-4 mr-1" /> Height
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.height}
                  onChange={(e) =>
                    updateFormData("height", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Short</span>
                  <span>Average</span>
                  <span>Tall</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">About you</h2>
            <p className="text-gray-600">
              Let others know what makes you unique
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    updateFormData("description", e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 h-32"
                  placeholder="Tell potential matches about yourself..."
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  <span
                    className={
                      formData.description.length > 300 ? "text-red-500" : ""
                    }
                  >
                    {formData.description.length}
                  </span>
                  /300 characters
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your hobbies (select at least one)
                </label>
                <div className="flex flex-wrap gap-2 text-gray-700">
                  {allowedHobbies.map((hobby) => (
                    <button
                      key={hobby}
                      type="button"
                      onClick={() => toggleHobby(hobby)}
                      className={`py-1 px-3 rounded-full border text-sm focus:outline-none focus:ring-2 
                        ${
                          isHobbySelected(hobby)
                            ? "bg-purple-600 text-white border-purple-600"
                            : "border-gray-300 hover:bg-purple-50 hover:border-purple-300"
                        }`}
                    >
                      {hobby}
                    </button>
                  ))}
                </div>
                {formData.selectedHobbies.length === 0 && (
                  <p className="text-xs text-red-500">
                    Please select at least one hobby
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Profile photos</h2>
            <p className="text-gray-600">Add your NFT profile picture</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Picture NFT (URL or NFT ID)
                </label>
                <input
                  type="text"
                  value={formData.profilePic}
                  onChange={(e) => updateFormData("profilePic", e.target.value)}
                  placeholder="Enter your NFT URL or token ID"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                />
              </div>

              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                  {formData.profilePic ? (
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-200 overflow-hidden">
                      <p className="text-center text-sm text-gray-600 p-4">
                        Your NFT: {formData.profilePic}
                      </p>
                    </div>
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">
                        Enter NFT above
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-center text-sm text-gray-600">
                This will be your primary profile photo
              </p>
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
          <h1 className="text-3xl font-bold text-purple-600">dupple</h1>
        </div>

        {renderStepIndicator()}

        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
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
              onClick={nextStep}
              disabled={
                (step === 3 && formData.selectedHobbies.length === 0) ||
                isPending
              }
              className={`py-2 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 flex items-center ${
                (step === 3 && formData.selectedHobbies.length === 0) ||
                isPending
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {isPending ? (
                "Processing..."
              ) : step === totalSteps ? (
                "Register on Blockchain"
              ) : (
                <>
                  Continue
                  <ChevronRight className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already registered?{" "}
            <a
              href="/login"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Connect wallet
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
