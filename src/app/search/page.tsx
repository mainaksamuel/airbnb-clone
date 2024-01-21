import InfoCard from "@/components/InfoCard";
import Mapper from "@/components/Mapper";
import { SearchParams } from "@/typings";
import { getSearchResults } from "@/utils/APIData";
import { format } from "date-fns";

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchResults = await getSearchResults();

  const formatDate = (dateParam: Date | string) => {
    return format(new Date(dateParam), "dd MMMM yy");
  };

  const dateRange = `${formatDate(
    searchParams.startDate || new Date(),
  )} - ${formatDate(searchParams.endDate || new Date())}`;

  return (
    <>
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ Stays : {dateRange} - for {searchParams.numOfGuests || 1} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {searchParams.location}
        </h1>

        <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map((result) => (
            <InfoCard key={result.id} listing={result} />
          ))}
        </div>
      </section>

      <section className="hidden lg:inline-flex xl:min-w-[600px]">
        <Mapper searchResults={searchResults} />
      </section>
    </>
  );
}
