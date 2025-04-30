"use client";

import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useLike } from "@/src/hooks/useLike";
import { useDislike } from "@/src/hooks/useDislike";
import { useGetNumber } from "@/src/hooks/useGetNumber";
import { useState, useEffect } from "react";
import { useFlare } from "@/src/hooks/useRegisterUser";

export function LikeAddressInput() {
  const { Like, isPending: isLiking, error: likeError } = useFlare();
  const { Dislike, isLoadingg: isDisliking, errorr: dislikeError } = useDislike();
  const {
    display,
    isPending: isNumberLoading,
    error: numberError,
  } = useGetNumber();

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [addressToLike, setAddressToLike] = useState<string>("");

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const num = await display();
        setCurrentNumber(Number(num));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch number");
      }
    };

    fetchNumber();
  }, [display]);

  const handleLike = async () => {
    setError(null);
    try {
      if (!addressToLike) {
        throw new Error("Please enter an address to like");
      }
      await Like(addressToLike);
      const num = await display();
      setCurrentNumber(Number(num));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Like failed");
    }
  };

  const handleDislike = async () => {
    setError(null);
    try {
      await Dislike();
      const num = await display();
      setCurrentNumber(Number(num));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Dislike failed");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm text-gray-500">
          Address to like
        </label>
        <input
          id="address"
          type="text"
          value={addressToLike}
          onChange={(e) => setAddressToLike(e.target.value)}
          placeholder="0x..."
          className="p-2 border rounded-lg"
        />
      </div>

      <div className="text-center p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-500">Current Count</p>
        <p className="text-3xl font-bold text-pink-500">
          {isNumberLoading ? "Loading..." : currentNumber}
        </p>
      </div>

      <button
        onClick={handleLike}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLiking || isDisliking || !addressToLike}
      >
        <ThumbsUp
          className={`w-5 h-5 ${
            isLiking ? "fill-green-300 stroke-green-300" : "fill-white"
          }`}
        />
        {isLiking ? "Liking..." : "Like"}
      </button>

      <button
        onClick={handleDislike}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisliking || isLiking}
      >
        <ThumbsDown
          className={`w-5 h-5 ${
            isDisliking ? "fill-red-300 stroke-red-300" : "fill-white"
          }`}
        />
        {isDisliking ? "Disliking..." : "Dislike"}
      </button>

      {(error || likeError || dislikeError || numberError) && (
        <p className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">
          {error ||
            likeError?.message ||
            dislikeError?.message ||
            numberError?.message}
        </p>
      )}
    </div>
  );
}
