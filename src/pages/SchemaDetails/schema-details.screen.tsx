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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { StatsCard } from "@/components";

export const SchemaDetailScreen = () => {
  const { schemaId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-4">
        <Badge variant="secondary" className="text-lg">
          #20
        </Badge>{" "}
        <p className="text-lg">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>

      <div className="grid grid-cols-3 gap-20">
        <StatsCard
          title="Total Attestation"
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
        <StatsCard
          title="OffChain Attestation"
          value="200"
          change="+4.5%"
          changeText="from last week"
          changeColor="bg-lime-400/20 text-lime-700"
        />
      </div>

      <div>
        <div className="mt-12">
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
              08/10/2024 1:27:24 am (39 minutes ago)
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Creator
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <a className="flex items-center gap-2" href="/events/1000">
                <span
                  data-slot="avatar"
                  className="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-full *:rounded-full"
                >
                  <img
                    className="size-full"
                    src="https://pbs.twimg.com/profile_images/1733931010977640448/KTlA02mC_400x400.jpg"
                    alt=""
                  />
                </span>
                <span>Koushith.eth</span>
              </a>
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Transaction ID
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              xxxxxxxxxxxxxxxxxxxxx
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Revocable Attestations
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              No
            </dd>

            <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
              Schema
            </dt>
            <dd className="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
              <code>uint name</code>
            </dd>
          </dl>
        </div>
      </div>

      <div>
        <Button className="w-full">Attest this Schema</Button>
      </div>

      <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        All Attestations to this Schema
      </h2>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-4">ID</TableHead>
              <TableHead className="px-4 py-4">UID</TableHead>
              <TableHead className="px-4 py-4">Schema</TableHead>
              <TableHead className="px-4 py-4">Attestations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              key={"attestation.id"}
              onClick={() => navigate(`/schema/view/${"attestation.id"}`)}
            >
              <TableCell className="font-medium px-4 py-4">#01</TableCell>
              <TableCell className="px-4 py-4">12333</TableCell>
              <TableCell className="px-4 py-4">
                <Badge variant="secondary">String</Badge>{" "}
                <Badge variant="secondary">Bool</Badge>
              </TableCell>
              <TableCell className="px-4 py-4">5</TableCell>
            </TableRow>

            <TableRow
              key={"attestation.id"}
              onClick={() => navigate(`/schema/view/${"attestation.id"}`)}
            >
              <TableCell className="font-medium px-4 py-4">#01</TableCell>
              <TableCell className="px-4 py-4">12333</TableCell>
              <TableCell className="px-4 py-4">
                <Badge variant="secondary">String</Badge>{" "}
                <Badge variant="secondary">Bool</Badge>
              </TableCell>
              <TableCell className="px-4 py-4">5</TableCell>
            </TableRow>

            <TableRow
              key={"attestation.id"}
              onClick={() => navigate(`/schema/view/${"attestation.id"}`)}
            >
              <TableCell className="font-medium px-4 py-4">#01</TableCell>
              <TableCell className="px-4 py-4">12333</TableCell>
              <TableCell className="px-4 py-4">
                <Badge variant="secondary">String</Badge>{" "}
                <Badge variant="secondary">Bool</Badge>
              </TableCell>
              <TableCell className="px-4 py-4">5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
