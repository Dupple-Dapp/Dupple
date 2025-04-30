import { useSendTransaction, useActiveAccount } from "thirdweb/react";
import { prepareContractCall, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { client } from "../provider/thirdwebAAclient";
import { CONTRACT_ADDRESS } from "../contract/address";
// import abi from "../contract/abi.json";

// const abi =

export const useDislike = () => {
  const account = useActiveAccount();
  const contract = getContract({
    address: "0xd76f18d703eC53304adf911Af7fE6a56e5C6EFc9", // Use the imported address
    chain: baseSepolia,
    abi: [
      {
        inputs: [],
        name: "decrement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "number",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ] as any,
    client,
  });

  const { mutateAsync, isPending, error } = useSendTransaction();

  const Dislike = async () => {
    if (!account) {
      throw new Error("Smart account not ready. Please complete social login.");
    }

    if (!account.address) {
      throw new Error("Account address not available");
    }

    const tx = prepareContractCall({
      contract: contract,
      method: "decrement", // Just the function name
      params: [],
    });

    console.log("Dislike",tx);

    try {
      const transactionReceipt = await mutateAsync(tx);
      console.log("passed!")
      return transactionReceipt;
    } catch (err) {
      console.error("Transaction failed:", err);
      throw err;
    }

    // return await mutateAsync(tx);
  };

  return { Dislike, isLoadingg: isPending, errorr: error };
};
