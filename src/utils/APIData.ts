import {
  ExploreNearByData,
  SearchListingsData,
  LiveAnywhereData,
} from "@/typings";
import { supabase } from "./superbase";

export async function getSearchResults() {
  const { data: search_listings_data, error } = await supabase
    .from("airbnb_search_listings_data")
    .select("*");

  if (error) throw new Error(`Error fetching "search listings data" data.`);

  return search_listings_data as SearchListingsData[];
}

export async function getNearByData() {
  const { data: explore_nearby_data, error } = await supabase
    .from("airbnb_explore_nearby_data")
    .select("*");

  if (error) throw new Error(`Error fetching "Explore Nearby" data.`);

  return explore_nearby_data as ExploreNearByData[];
}

export async function getLiveAnywhereData() {
  const { data: live_anywhere_data, error } = await supabase
    .from("airbnb_live_anywhere_data")
    .select("*");

  if (error) throw new Error(`Error fetching "Live Anywhere" data.`);

  return live_anywhere_data as LiveAnywhereData[];
}
