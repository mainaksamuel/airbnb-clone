"use client";

import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { addDays, format } from "date-fns";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function getPlaceholderText(searchParams: ReadonlyURLSearchParams) {
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const numOfGuests = searchParams.get("numOfGuests");

  const formatDate = (dateParam: Date | string) => {
    return format(new Date(dateParam), "dd MMM yy");
  };

  const dateRange = `${formatDate(startDate || new Date())} - ${formatDate(
    endDate || new Date(),
  )}`;

  // only shows 26 characters
  return `${location} | ${dateRange} | ${numOfGuests}`;
}

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const placeholderText =
    searchParams.size > 0
      ? getPlaceholderText(searchParams)
      : "Start your search";

  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  interface DateRangeSelection {
    [key: string]: {
      startDate?: Date;
      endDate?: Date;
      key?: string;
    };
  }
  const handleChangeDates = ({
    selection: { startDate, endDate, key },
  }: DateRangeSelection) => {
    if (startDate && endDate && key)
      setSelectionRange({ startDate, endDate, key });
  };

  const handleGuestNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 0) setNumberOfGuests(Number(e.target.value));
  };

  const handleSearch = () => {
    resetSearchInput();

    const params = new URLSearchParams();
    params.set("location", searchInput);
    params.set("startDate", selectionRange.startDate.toISOString());
    params.set("endDate", selectionRange.endDate.toISOString());
    params.set("numOfGuests", numberOfGuests.toString());

    router.push(`/search?${params.toString()}`);
  };

  const resetSearchInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 md:px-10 grid grid-cols-3 gap-x-1">
      <div className="relative flex items-center cursor-pointer h-10 my-auto">
        <Link href={"/"}>
          <Image
            src={"/airbnb_logo.png"}
            alt="Airbnb Logo"
            width={120}
            height={120}
            className="object-left object-contain w-auto h-auto"
          />
        </Link>
      </div>

      <div className="flex items-center rounded-full md:border-2 md:shadow-sm justify-end">
        <input
          name="search"
          type="text"
          className="text-center m-auto p-1 bg-transparent focus:outline-none m-2 text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholderText}
          value={searchInput}
          onChange={handleSearchInput}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={handleChangeDates}
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              name="numberOfPeople"
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGuests}
              onChange={handleGuestNumber}
              min={1}
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={resetSearchInput}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
