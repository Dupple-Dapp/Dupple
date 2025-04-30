// useGetNumber.ts
import { useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { client } from "../provider/thirdwebAAclient";

export const useGetNumber = () => {
  const contract = getContract({
    address: "0xd76f18d703eC53304adf911Af7fE6a56e5C6EFc9",
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
    ] as const,
    client,
  });

  const {
    data: number,
    isLoading,
    error,
  } = useReadContract({
    contract,
    method: "number",
    params: [],
  });

  return {
    display: async () => number,
    isPending: isLoading,
    error,
  };
};
