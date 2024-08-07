import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEthersSigner } from "../../utils/wagmi-utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateSchema } from "@/features";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ATTESTATIONS } from "@/utils/get-attestations";

//@ts-ignore

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const HomeScreen = () => {
  const [isSchemaModelActive, setIsSchemeModelActive] = useState(false);
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

  const { loading, error, data } = useQuery(GET_ATTESTATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Welcome Back!!</p>
        <Button
          onClick={() => {
            setIsSchemeModelActive(true);
          }}
        >
          <PlusIcon className="mr-2 h-4 w-4" /> New Schema
        </Button>
      </div>

      {/* <button onClick={registerSchema}>Create Schema</button>
      <button onClick={getSchemeInfo}>get Schema info</button>
      <button onClick={getAttastation}>get Attestation</button> */}

      <div className="grid grid-cols-3 gap-3 mt-4 mb-4">
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <CreateSchema
        isSchemaModelActive={isSchemaModelActive}
        setIsSchemeModelActive={setIsSchemeModelActive}
      />

      <div>
        <h1>Attestations</h1>
        <ul>
          {data.attestations.map((attestation: any) => (
            <li key={attestation.id}>
              <p>ID: {attestation.id}</p>
              <p>Attester: {attestation.attester}</p>
              <p>Recipient: {attestation.recipient}</p>
              <p>RefUID: {attestation.refUID}</p>
              <p>Revocable: {attestation.revocable.toString()}</p>
              <p>Revocation Time: {attestation.revocationTime}</p>
              <p>Expiration Time: {attestation.expirationTime}</p>
              <p>Data: {attestation.data}</p>
            </li>
          ))}
        </ul>
      </div>
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
