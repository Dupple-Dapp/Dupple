"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "../../provider/thirdwebProvider";
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
              options: ["google", "farcaster", "passkey"],
            },
          }),
        ]}
        accountAbstraction={{
          chain: baseSepolia,
          sponsorGas: true,
          
        }}
      />
    </div>
  );
}
