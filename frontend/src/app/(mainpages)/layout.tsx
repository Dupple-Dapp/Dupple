import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { handleVerify } from "@/src/minikit/verifyUsers";

export default async function MainPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isVerified = await handleVerify();

  if (!isVerified) {
    redirect("/verify");
  }

  return <div className="p-4">{children}</div>;
}
