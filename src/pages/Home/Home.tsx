import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { useSigner } from "../../utils/wagmi-utils";

export const HomeScreen = () => {
  const account = useAccount();

  const signer = useSigner();
  console.log(signer);

  const createSchema = async () => {
    try {
      const easContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

      const eas = new EAS(easContractAddress);

      // Signer must be an ethers-like signer.
      //@ts-ignore
      await eas.connect(signer);

      const schemaEncoder = new SchemaEncoder("string name, string message");
      const encodedData = schemaEncoder.encodeData([
        { name: "name", value: "KOUSHTH", type: "string" },
        { name: "message", value: "HELLO", type: "string" },
      ]);

      const schemaUID =
        "0xb28844791177681bd44d983e8aaa017f6a378e297271a46fd20d81a5cbadc386";

      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: "0x9F2dE3A03C24e5eBD99a478aC93DD2e6772f2f2f",
          //@ts-ignore
          expirationTime: 0,
          revocable: true,
          data: encodedData,
        },
      });

      console.log("tx", tx);

      const newAttestationUID = await tx.wait();

      console.log("newAttestationUID", newAttestationUID);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <p>Your account: {account?.status}</p>
      <ConnectKitButton />

      <button onClick={createSchema}>Create Schema</button>
    </div>
  );
};
