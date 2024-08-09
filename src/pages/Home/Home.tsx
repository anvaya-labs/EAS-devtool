import { useState } from "react";
import { CopyIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@apollo/client";
import { GET_ATTESTATIONS } from "@/utils/get-attestations";
import { useEnsName } from "wagmi";

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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, PlusIcon } from "lucide-react";
import { CreateSchema } from "@/features";
import { formatDate } from "@/utils/format";
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

//@ts-ignore

export const HomeScreen = () => {
  const [isSchemaModelActive, setIsSchemeModelActive] = useState(false);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ATTESTATIONS);
  console.log(data);

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
        {/* <Table>
          <TableCaption>A list of your recent attestations.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Attester</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>RefUID</TableHead>
              <TableHead>Revocable</TableHead>
              <TableHead>Revocation Time</TableHead>
              <TableHead>Expiration Time</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.attestations.map((attestation: any) => (
              <TableRow
                key={attestation.id}
                onClick={() => navigate(`/schema/view/${attestation.id}`)}
              >
                <TableCell className="font-medium">{attestation.id}</TableCell>
                <TableCell>{attestation.attester}</TableCell>
                <TableCell>{attestation.recipient}</TableCell>
                <TableCell>{attestation.refUID}</TableCell>
                <TableCell>{attestation.revocable.toString()}</TableCell>
                <TableCell>{formatDate(attestation.revocationTime)}</TableCell>
                <TableCell>{formatDate(attestation.expirationTime)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}

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
            {data.attestations.map((attestation: any) => (
              <TableRow
                key={attestation.id}
                onClick={() => navigate(`/schema/view/${attestation.id}`)}
              >
                <TableCell className="font-medium px-4 py-4">#01</TableCell>
                <TableCell className="px-4 py-4">
                  {attestation.refUID}
                </TableCell>
                <TableCell className="px-4 py-4">
                  <Badge variant="secondary">String</Badge>{" "}
                  <Badge variant="secondary">Bool</Badge>
                </TableCell>
                <TableCell className="px-4 py-4">5</TableCell>
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
