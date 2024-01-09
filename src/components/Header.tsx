import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 md:px-10 grid grid-cols-3 gap-x-1">
      <div className="relative flex items-center cursor-pointer h-10 my-auto">
        <Link href={"/"}>
          <Image
            src={"/airbnb_logo.png"}
            alt="Airbnb Logo"
            width={120}
            height={120}
            className="object-left object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center rounded-full md:border-2 md:shadow-sm justify-between">
        <input
          name="search"
          type="text"
          placeholder="Start your search"
          className="bg-transparent focus:outline-none m-2 text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex text-red-400 rounded-full  h-10 cursor-pointer" />
      </div>

      <div className="flex space-x-2 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="border-2 rounded-full flex items-center space-x-2 p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
