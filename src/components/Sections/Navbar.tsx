import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className=" text-gray-800 dark:text-gray-200 flex items-center justify-between p-4 bg-transparent dark:bg-gray-900 shadow-md">
      <div className="text-2xl font-semibold">
        <h1 className="text-3xl font-semibold">Shop</h1>
      </div>
      <div className="flex gap-4 ">
        {" "}
        <Button variant={"ghost"} className="cursor-pointer">
          Home
        </Button>
        <Button variant={"ghost"} className="cursor-pointer">
          Shop
        </Button>
        <Button variant={"ghost"} className="cursor-pointer">
          Products
        </Button>
        <Button variant={"ghost"} className="cursor-pointer">
          About
        </Button>
        <Select>
          <SelectTrigger className="w-auto ">
            <SelectValue placeholder="En">En</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Hindi</SelectItem>
            <SelectItem value="dark">Odia</SelectItem>
            <SelectItem value="system">Tamil</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-4">
        <div className="relative w-full">
          <Input
            className="w-[400px] pr-10" // Add right padding so the button doesn't overlap text
            placeholder="Search"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-6 top-5 -translate-y-1/2"
            variant="link"
          >
            <CiSearch className="h-4 w-4" />
          </Button>
        </div>
        <CiHeart className="text-[45px] cursor-pointer" />
        <BsCart2 className="text-[40px] cursor-pointer " />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ClsHhZp2KEW8imaYcdGzas_-gLD5wW0VeA&s"
                alt="@shadcn"
                className="cursor-pointer"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
