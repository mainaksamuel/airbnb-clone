import { LiveAnywhereData } from "@/typings";
import Image from "next/image";

interface MediumCardProps {
  card: LiveAnywhereData;
}

export default function MediumCard({ card }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 trasform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={`/${card.img}`}
          alt={`${card.title} card image`}
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{card.title}</h3>
    </div>
  );
}
