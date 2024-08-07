import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { useEthersSigner } from "../../utils/wagmi-utils";
//@ts-ignore

export const HomeScreen = () => {
  const account = useAccount();

  const signer = useEthersSigner();

  const easContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; //sepolia
  const schemeRegisteryAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; //sepolia

  const registerSchema = async () => {
    try {
      const schemaRegistry = new SchemaRegistry(schemeRegisteryAddress);
      if (signer) {
        schemaRegistry.connect(signer);

        const schema = "string name, string place";
        const resolverAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // if no resolver is needed
        const revocable = false;

        const transaction = await schemaRegistry.register({
          schema,
          resolverAddress,
          revocable,
        });

        // Optional: Wait for transaction to be validated
        const tx = await transaction.wait();

        console.log("tx", tx);
        console.log("transaction", transaction);
        console.log("Schema registered successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSchemeInfo = async () => {
    try {
      const schemaRegistryContractAddress =
        "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; // Sepolia 0.26
      const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);
      if (signer) {
        schemaRegistry.connect(signer);
        const schemaUID =
          "0x72547d19683713df63d66f973e0d8eb94e1fc4fc2c8e8dcc7af9fe9770397043";

        const schemaRecord = await schemaRegistry.getSchema({ uid: schemaUID });

        console.log("schemaRecord", schemaRecord);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAttastation = async () => {
    try {
      const eas = new EAS(easContractAddress);
      if (signer) {
        eas.connect(signer);
        const uid =
          "0xd1bb13671b1cf5a2e2bdf1396d7985d6552fc3e805c6f1c60f0ac9c7b2619677";

        const attestation = await eas.getAttestation(uid);

        console.log("attestation", attestation);
      }
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

      <button onClick={registerSchema}>Create Schema</button>
      <button onClick={getSchemeInfo}>get Schema info</button>
      <button onClick={getAttastation}>get Attestation</button>
    </div>
  );
};

//Todo

/**
 * [] create new schema
 * [] get a schema created by them
 *  [] attest the schema
 * [] get all attestation made by them
 */
