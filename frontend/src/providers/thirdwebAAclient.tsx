// src/client.ts
import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY;

export const client = createThirdwebClient({
  clientId: clientId as string,
  secretKey: secretKey as string
});
