import { useEffect, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";
import { ethers, JsonRpcProvider, JsonRpcSigner } from "ethers";

export async function walletClientToSigner(walletClient: any) {
  const { account, chain, transport } = walletClient;
  console.log("walletClient", walletClient);
  console.log("account", account);
  console.log("chain", chain);
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new ethers.BrowserProvider(transport, network);
  return provider.getSigner(account.address);
}

export function useSigner() {
  const { data: walletClient } = useWalletClient();

  const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined);
  useEffect(() => {
    async function getSigner() {
      if (!walletClient) return;

      const tmpSigner = await walletClientToSigner(walletClient);

      setSigner(tmpSigner);
    }

    getSigner();
  }, [walletClient]);
  return signer;
}
