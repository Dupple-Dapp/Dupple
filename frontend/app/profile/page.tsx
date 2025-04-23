import { Settings, UserRoundPen } from "lucide-react";

const page = () => {
  return (
    <div className="p-5 bg-white text-gray-700">
      <div className="flex justify-between">
        <h1>Profile</h1>
        <div className="flex gap-4">
        <Settings />
        <UserRoundPen />
        </div>
      </div>
    </div>
  );
};

export default page;
