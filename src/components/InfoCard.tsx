import { SearchListingsData } from "@/typings";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface InfoCardProps {
  listing: SearchListingsData;
}

export default function InfoCard({ listing }: InfoCardProps) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={`/${listing.img}`}
          alt={`${listing.title} card image`}
          fill={true}
          sizes="300px"
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p>{listing.location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{listing.title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {listing.description}
        </p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-7 text-red-400" />
            {listing.star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {listing.price}
            </p>
            <p className="text-right font-extralight">{listing.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
