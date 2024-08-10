import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client";
import {
  GET_ATTESTATIONS,
  GET_ATTESTATIONS_BY_WALLET_ID,
} from "@/utils/graphql-queries";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { CreateSchema } from "@/features";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components";
import { useAccount } from "wagmi";

//@ts-ignore

export const HomeScreen = () => {
  const [isSchemaModelActive, setIsSchemeModelActive] = useState(false);
  const navigate = useNavigate();

  const { address } = useAccount();
  const { loading, error, data } = useQuery(GET_ATTESTATIONS_BY_WALLET_ID, {
    variables: {
      where: {
        creator: {
          equals: address,
        },
      },
    },
  });

  console.log("data-home", data);

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

      <div className="grid grid-cols-3 gap-10 mt-4 mb-4">
        <StatsCard
          title="OffChain Attestation"
          value="200"
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
        <StatsCard
          title="OffChain Attestation"
          value="200"
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
      </div>

      <div className="mt-10 ">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          My Schemas
        </h2>

        <Table className="mt-4 cursor-pointer">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-4">ID</TableHead>
              <TableHead className="px-4 py-4">UID</TableHead>
              <TableHead className="px-4 py-4">Schema</TableHead>
              <TableHead className="px-4 py-4">Attestations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.schemata.map((schema: any, index: number) => (
              <TableRow
                key={schema.id}
                onClick={() => navigate(`/schema/view/${schema.id}`)}
              >
                <TableCell className="font-medium px-4 py-4">
                  #{schema.index}
                </TableCell>
                <TableCell className="px-4 py-4">{schema.id}</TableCell>
                <TableCell className="px-4 py-4">
                  {schema.schema
                    .split(", ")
                    .map((type: string, idx: number) => (
                      <Badge key={idx} variant="secondary">
                        {type.split(" ")[0]}
                      </Badge>
                    ))}
                </TableCell>
                <TableCell className="px-4 py-4">
                  {schema._count.attestations}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <CreateSchema
        isSchemaModelActive={isSchemaModelActive}
        setIsSchemeModelActive={setIsSchemeModelActive}
      />
    </div>
  );
};
