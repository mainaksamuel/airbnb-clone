import Banner from "@/components/Banner";
import ExploreNearBy from "@/components/ExploreNearBy";
import LargeCard from "@/components/LargeCard";
import LiveAnywhere from "@/components/LiveAnywhere";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <ExploreNearBy />

        <LiveAnywhere />

        <LargeCard
          img="/houses_boat_shoreline.webp"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          btnText="Get Inspired"
        />
      </main>
    </div>
  );
}
