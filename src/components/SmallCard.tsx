import { ExploreNearByData } from "@/typings";
import Image from "next/image";

interface SmallCardProps {
  item: ExploreNearByData;
}

export default function SmallCard({ item }: SmallCardProps) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={`/${item.img}`}
          alt={`${item.location} card image`}
          width={320}
          height={180}
          className="object-fill rounded-lg"
        />
      </div>

      <div className="">
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
}
