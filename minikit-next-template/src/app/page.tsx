import { PayBlock } from "@/src/components/Pay";
import { SignIn } from "@/src/components/SignIn";
import { VerifyBlock } from "@/src/components/Verify";
import Register from "./register/page";

export default function Home() {
  return (
    <main className="justify-center flex items-center h-screen">
      {/* <SignIn />
      <VerifyBlock />
      <PayBlock /> */}

      <Register />
    </main>
  );
}
