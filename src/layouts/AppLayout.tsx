import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, Outlet } from "react-router-dom";
import { ConnectKitButton } from "connectkit";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="container sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            to={""}
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            className="text-foreground transition-colors hover:text-foreground"
            to={""}
          >
            Home
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            to={""}
          >
            About
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            to={""}
          >
            Developers
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            to={""}
          >
            Profile
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="flex items-center gap-2 text-lg font-semibold"
                to={""}
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link className="hover:text-foreground" to={""}>
                Dashboard
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                to={""}
              >
                Orders
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                to={""}
              >
                Products
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                to={""}
              >
                Customers
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                to={""}
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Attestations, Schema, UID ..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button> */}
              <ConnectKitButton />
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <main className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};
