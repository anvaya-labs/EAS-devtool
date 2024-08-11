import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { StatsCard } from "@/components";
import { Alert } from "@/components/ui/alert";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useQuery } from "@apollo/client";
import { GET_SCHEMA_BY_ID } from "@/utils/graphql-queries";
import { formatDateTime } from "@/utils/format";
import { truncateString } from "@/utils/misc";
import { EasAttest } from "eas-react";
import { useEthersSigner } from "@/utils/wagmi-utils";

export const SchemaDetailScreen = () => {
  const { schemaId } = useParams();
  const navigate = useNavigate();
  const signer = useEthersSigner();

  const { loading, error, data } = useQuery(GET_SCHEMA_BY_ID, {
    variables: {
      where: {
        id: schemaId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const schema = data?.getSchema;
  const attestations = schema?.attestations || [];

  return (
    <>
      <div className="flex gap-4">
        <Badge variant="secondary" className="text-lg">
          #{schema?.index}
        </Badge>{" "}
        <p className="text-lg">{schema?.id}</p>
      </div>

      <div className="grid grid-cols-3 gap-20">
        <StatsCard
          title="Total Attestation"
          value={attestations.length}
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
        <StatsCard
          title="OnChain Attestation"
          value={attestations.filter((a: any) => !a.isOffchain).length}
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
        <StatsCard
          title="OffChain Attestation"
          value={attestations.filter((a: any) => a.isOffchain).length}
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          Summary
        </h2>

        <hr
          role="presentation"
          className="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10"
        />
        <dl className="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6">
          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Created On
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            {formatDateTime(schema?.time)}
          </dd>

          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Creator
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            <a
              className="flex items-center gap-2"
              href={`/events/${schema?.id}`}
            >
              <span>{schema?.creator}</span>
            </a>
          </dd>

          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Transaction ID
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            <a
              href={`https://sepolia.etherscan.io/tx/${schema?.txid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {schema?.txid}
            </a>
          </dd>

          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Resolver Contract
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            {schema?.resolver}
            {schema?.resolver !==
              "0x0000000000000000000000000000000000000000" && (
              <div>
                <Alert variant="destructive" className="mt-2">
                  This schema is using a custom resolver contract. Only interact
                  with schemas you trust and have verified.
                </Alert>
              </div>
            )}
          </dd>

          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Revocable Attestations
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            {schema?.revocable ? "Yes" : "No"}
          </dd>

          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            Schema
          </dt>
          <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
            <SyntaxHighlighter language="javascript" style={docco}>
              {schema?.schema}
            </SyntaxHighlighter>
          </dd>
        </dl>
      </div>

      <div>
        <EasAttest 
        text="Attest this Schema"
        schemaId={schemaId!}
        network="sepolia"
        signer={signer!}
        buttonProps={{
          width: "full"
        }}
        onAttestationComplete={(attestation) => {
          console.log('Attestation complete', attestation);
          navigate(`/attestation/view/${attestation.attestationUid}`);
        }}
         />
      </div>

      <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        All Attestations to this Schema
      </h2>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-4">Schema</TableHead>
              <TableHead className="px-4 py-4">UID</TableHead>
              <TableHead className="px-4 py-4">From</TableHead>
              <TableHead className="px-4 py-4">To</TableHead>
              <TableHead className="px-4 py-4">Attestation Type</TableHead>
              <TableHead className="px-4 py-4">Attestation Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="cursor-pointer">
            {attestations.map((attestation: any) => (
              <TableRow
                key={attestation.id}
                onClick={() => navigate(`/attestation/view/${attestation.id}`)}
              >
                <TableCell className="px-4 py-4">
                  <Badge variant="secondary">#{attestation.schema.index}</Badge>{" "}
                </TableCell>
                <TableCell className="font-medium px-4 py-4">
                  {truncateString(attestation.id)}
                </TableCell>

                <TableCell className="px-4 py-4">
                  {truncateString(attestation.attester)}
                </TableCell>
                <TableCell className="px-4 py-4">
                  {truncateString(attestation.recipient)}
                </TableCell>
                <TableCell className="px-4 py-4">
                  {attestation.isOffchain ? "OffChain" : "OnChain"}
                </TableCell>
                <TableCell className="px-4 py-4">
                  {formatDateTime(attestation.time)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-10 flex items-center justify-center ">
          <div>
            <Button
              variant="secondary"
              className="flex items-center justify-center w-full"
            >
              View All Attestations
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
