import { useWalletClient } from "wagmi";
import { useCallback, useState } from "react";
import axios from "axios";
import { withPaymentInterceptor, decodeXPaymentResponse } from "x402-axios";

export function usePaymentHook() {
  const { data: walletClient, isError, isLoading } = useWalletClient();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const processPayment = useCallback(async (amount, description = "Spark payment") => {
    if (!walletClient || !walletClient.account) throw new Error("please connect your wallet");
    if (isError) throw new Error("wallet not connected");
    if (isLoading) throw new Error("wallet is loading");
    
    setPaymentLoading(true);
    
    try {
      const baseClient = axios.create({
        baseURL: "https://payments.vistara.dev",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const apiClient = withPaymentInterceptor(baseClient, walletClient);
      const response = await apiClient.post("/api/payment", { 
        amount: `$${amount}`,
        description 
      });
      
      const paymentResponse = response.config.headers["X-PAYMENT"];
      if (!paymentResponse) throw new Error("payment response is absent");
      
      const decoded = decodeXPaymentResponse(paymentResponse);
      console.log(`decoded payment response: ${JSON.stringify(decoded)}`);
      
      return decoded;
    } finally {
      setPaymentLoading(false);
    }
  }, [walletClient, isError, isLoading]);

  const tipCurator = useCallback(async (amount, curatorId) => {
    return await processPayment(amount, `Tip for curator ${curatorId}`);
  }, [processPayment]);

  return { 
    processPayment, 
    tipCurator, 
    paymentLoading,
    isWalletConnected: !!walletClient?.account && !isError && !isLoading
  };
}