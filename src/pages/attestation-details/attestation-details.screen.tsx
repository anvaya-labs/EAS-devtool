import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/utils/format";
import { GET_ATTESTATION_BY_ID } from "@/utils/graphql-queries";
import { useQuery } from "@apollo/client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const AttestationDetails = () => {
  const { attestationId } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ATTESTATION_BY_ID, {
    variables: {
      where: {
        id: attestationId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Parse the JSON data
  const decodedData = data?.getAttestation?.decodedDataJson
    ? JSON.parse(data.getAttestation.decodedDataJson)
    : [];

  return (
    <div>
      <>
        <Badge>
          {data?.getAttestation?.isOffChain
            ? "OffChain Attestation"
            : "OnChain Attestation"}
        </Badge>
        <div className="flex gap-4 items-center mt-2">
          <p>UID</p>
          <p className="text-md">{data?.getAttestation?.id}</p>
        </div>

        <div className="grid grid-cols-2 gap-20 mt-10">
          <div className="flex gap-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
              <ArrowUp className="h-4 w-4 shrink-0 text-primary-900" />{" "}
              {/* Placeholder icon */}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900">From</h3>
              <span></span>
              <h4 className="mt-0 text-base font-normal text-gray-700">
                {data?.getAttestation?.attester ?? "No Attester"}
              </h4>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
              <ArrowDown className="h-4 w-4 shrink-0 text-primary-900" />{" "}
              {/* Placeholder icon */}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900">To</h3>
              <span></span>
              <h4 className="mt-0 text-base font-normal text-gray-700">
                {data?.getAttestation?.recipient ?? "No Recipient"}
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-[1200px]">
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            Meta Summary
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
              {formatDateTime(data?.getAttestation?.timeCreated)}
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Expiration
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              {data?.getAttestation?.expirationTime === 0
                ? "Never"
                : formatDateTime(data?.getAttestation?.expirationTime)}
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Revoked
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              {data?.getAttestation?.revoked ? "Yes" : "No"}
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Recovable
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              {data?.getAttestation?.revocable ? "Yes" : "No"}
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Schema
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <div className="flex flex-row items-center gap-2 cursor-pointer">
                <Badge variant="secondary">
                  #{data?.getAttestation?.schema?.index ?? "N/A"}
                </Badge>{" "}
                {/* <a
                  className="text-blue-600 hover:underline"
                  target="_next"
                  href={`https://sepolia.easscan.org/schema/view/${data?.getAttestation?.schemaId}`}
                > */}
                <p className="text-blue-600 hover:underline"
                  onClick={() => {
                    navigate(`/schema/view/${data?.getAttestation?.schemaId}`);
                  }}
                >{data?.getAttestation?.schemaId}</p>{" "}
                {/* </a> */}
              </div>
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Referenced Attestations
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              {data?.getAttestation?.refUID ===
                "0x0000000000000000000000000000000000000000000000000000000000000000"
                ? "No attestation(s)"
                : data?.getAttestation?.refUID}
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Referencing Attestations
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              0 attestation(s)
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Transactions ID
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <a
                href={`https://sepolia.etherscan.io/tx/${data?.getAttestation?.txid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {data?.getAttestation?.txid}
              </a>
            </dd>
          </dl>
        </div>

        <div className="mt-12 max-w-[1200px] w-full mx-auto">
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            Data Summary
          </h2>

          <hr
            role="presentation"
            className="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10"
          />
          <dl className="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6">
            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Decoded Data
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <div
                className="p-4 rounded-sm w-[900px]"
                style={{ background: "rgb(248, 248, 255)" }}
              >
                {/* {decodedData.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="flex flex-row items-center rounded-sm gap-4 cursor-pointer bg-lime-400/20 mb-2"
                  >
                    <div className="bg-primary text-white p-4">
                      <p className="uppercase">{item.name}</p>
                    </div>
                    <div className="text-lime-700">
                      <p>
                        {item.value?.value?.hex
                          ? parseInt(item.value.value.hex, 16)
                          : item.value?.value || item.value}
                      </p>
                    </div>
                  </div>
                ))} */}
                {decodedData?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-row items-center rounded-sm gap-4 cursor-pointer bg-lime-400/20 mb-2"
                  >
                    <div className="bg-primary text-white p-4">
                      <p className="uppercase">
                        {item?.name ?? "Unknown Name"}{" "}
                      </p>
                    </div>
                    <div className="text-lime-700">
                      <p>
                        {(() => {
                          try {
                            // Check if there's a value and whether it's in hex format - GPT code
                            if (item?.value?.value?.hex) {
                              return parseInt(item.value.value.hex, 16);
                            } else if (item?.value?.value !== undefined) {
                              return item.value.value;
                            } else if (item?.value !== undefined) {
                              return item.value;
                            } else if (
                              typeof item === "string" ||
                              typeof item === "number"
                            ) {
                              return item; // Directly return the item if it's a primitive
                            } else {
                              return "N/A";
                            }
                          } catch (error) {
                            console.error("Error parsing value:", error);
                            return "Error";
                          }
                        })()}
                      </p>
                    </div>
                  </div>
                )) ?? <p>No decoded data available.</p>}
              </div>
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Raw Data
            </dt>
            <dd className="pb-3 w-[900px] pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <SyntaxHighlighter language="json" style={docco} className="p-2">
                {data?.getAttestation?.decodedDataJson}
              </SyntaxHighlighter>
            </dd>
          </dl>
        </div>
      </>
    </div>
  );
};
