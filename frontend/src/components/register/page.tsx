"use client";

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../providers/thirdwebAAclient";
import { inAppWallet } from "thirdweb/wallets";
import { baseSepolia } from "thirdweb/chains";

export default function Register() {
  const account = useActiveAccount();
  const isConnected = !!account?.address;

  return (
    <div>
      <ConnectButton
        autoConnect
        client={client}
        wallets={[
          inAppWallet({
            auth: {
              mode: "redirect",
              options: ["google", "farcaster", "passkey"],
              redirectUrl:
                "https://worldcoin.org/mini-app?app_id=app_e628a8540df5881096e0cf4ceacde900&draft_id=meta_ab22239fa156ef097c3c3a797de2f76e&app_mode=mini-app",
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
