import { useEnsName } from "wagmi";

export const resolveEnsName = (address: any) => {
  const { data: ensName } = useEnsName({
    address,
  });

  return ensName || address;
};
