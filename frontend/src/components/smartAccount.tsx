import { useActiveAccount } from "thirdweb/react";

export function AccountStatus() {
  const account = useActiveAccount();

  console.log("Aba:", account)

  if (!account) {
    return (
      <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">
        Please complete social login to continue registration.
      </div>
    );
  }

  return (
    <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
      Connected as: {account.address.substring(0, 6)}...
      {account.address.substring(38)}
    </div>
  );
}

