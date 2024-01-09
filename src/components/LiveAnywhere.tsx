import { getLiveAnywhereData } from "@/utils/APIData";
import MediumCard from "./MediumCard";

export default async function LiveAnywhere() {
  const liveAnywhereCards = await getLiveAnywhereData();
  return (
    <section className="mt-5">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {liveAnywhereCards?.map((card) => (
          <MediumCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
