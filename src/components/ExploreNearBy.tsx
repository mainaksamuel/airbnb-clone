import { getNearByData } from "@/utils/APIData";
import SmallCard from "./SmallCard";

export default async function ExploreNearBy() {
  const exploreData = await getNearByData();

  return (
    <section className="pt-5">
      <h2 className="text-4xl font-semibold pb-5">Explore NearBy</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((item) => <SmallCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
