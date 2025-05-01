// import {
//   MiniKit,
//   VerifyCommandInput,
//   VerificationLevel,
//   ISuccessResult,
// } from "@worldcoin/minikit-js";

// const verifyPayload: VerifyCommandInput = {
//   action: "woke-up", // This is your action ID from the Developer Portal
//   verification_level: VerificationLevel.Orb, // Orb | Device
// };

// export const handleVerify = async () => {
//   if (!MiniKit.isInstalled()) {
//     return;
//   }
//   // World App will open a drawer prompting the user to confirm the operation, promise is resolved once user confirms or cancels
//   const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);
//   if (finalPayload.status === "error") {
//     return console.log("Error payload", finalPayload);
//   }

//   // Verify the proof in the backend
//   const verifyResponse = await fetch("/api/verify", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       payload: finalPayload as ISuccessResult, // Parses only the fields we need to verify
//       action: "woke-up",
//     }),
//   });

//   // TODO: Handle Success!
//   const verifyResponseJson = await verifyResponse.json();
//   if (verifyResponseJson.status === 200) {
//     console.log("Verification success!");
//     setIsVerified(true);
//   }
// };


import {
  MiniKit,
  VerifyCommandInput,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/minikit-js";

const verifyPayload: VerifyCommandInput = {
  action: "woke-up", // This is your action ID from the Developer Portal
  verification_level: VerificationLevel.Orb, // Orb | Device
};

export const handleVerify = async (): Promise<boolean> => {
  if (!MiniKit.isInstalled()) {
    return false;
  }

  try {
    const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);

    if (finalPayload.status === "error") {
      console.log("Error payload", finalPayload);
      return false;
    }

    const verifyResponse = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: finalPayload as ISuccessResult,
        action: "woke-up",
      }),
    });

    const verifyResponseJson = await verifyResponse.json();
    return verifyResponseJson.status === 200;
  } catch (error) {
    console.error("Verification failed:", error);
    return false;
  }
};