"use client";

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../provider/thirdwebAAProvider";
import { inAppWallet } from "thirdweb/wallets";
import { baseSepolia } from "thirdweb/chains";
import { useEffect } from "react";

export default function Register() {
  const account = useActiveAccount();
  const isConnected = !!account;

  useEffect(() => {
    if (isConnected) {
      console.log("User connected:", account.address);
      // You might want to redirect or update parent state here
    }
  }, [isConnected, account]);

  return (
    <div>
      <ConnectButton
        client={client}
        wallets={[
          inAppWallet({
            auth: {
              mode: "popup",
              options: ["google", "farcaster", "passkey"],
              // redirectUrl: "https://8e67-105-112-124-95.ngrok-free.app/",
            },
          }),
        ]}
        accountAbstraction={{
          chain: baseSepolia,
          sponsorGas: true,
        }}
        connectButton={{
          label: isConnected ? "Connected" : "Register",
          className:
            "bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:from-purple-700 hover:to-purple-600 transition",
          style: {
            borderRadius: "10px",
          },
        }}
      />
    </div>
  );
}
