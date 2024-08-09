import { useState, useEffect } from "react";
import { useEnsName } from "wagmi";

export const useResolvedEnsName = (addresses: any) => {
  const [resolvedNames, setResolvedNames] = useState({});

  useEffect(() => {
    const resolveNames = async () => {
      const names = {};
      for (const address of addresses) {
        const { data: ensName } = await useEnsName({ address });
        //@ts-ignore
        names[address] = ensName || address;
      }
      setResolvedNames(names);
    };

    resolveNames();
  }, [addresses]);

  return resolvedNames;
};
