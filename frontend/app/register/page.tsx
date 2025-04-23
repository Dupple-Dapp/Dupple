"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "../../provider/thirdwebAAProvider";
import { inAppWallet } from "thirdweb/wallets";
import { baseSepolia } from "thirdweb/chains";

export default function Register() {
  return (
    <div>
      <ConnectButton
        client={client}
        wallets={[
          inAppWallet({
            auth: {
              mode: "redirect",
              options: ["google", "farcaster", "passkey"],
              redirectUrl: "https://8e67-105-112-124-95.ngrok-free.app/",
            },
          }),
        ]}
        accountAbstraction={{
          chain: baseSepolia,
          sponsorGas: true,
        }}
        connectButton={{
          label: "Register",
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
