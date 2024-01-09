import { ExploreNearByData, LiveAnywhereData } from "@/typings";
import { supabase } from "./superbase";

export async function getNearByData() {
  const { data: explore_nearby_data, error } = await supabase
    .from("explore_nearby_data")
    .select("*");

  if (error) throw new Error(`Error fetching "Explore Nearby" data.`);

  return explore_nearby_data as ExploreNearByData[];
}

export async function getLiveAnywhereData() {
  const { data: live_anywhere_data, error } = await supabase
    .from("live_anywhere_data")
    .select("*");

  if (error) throw new Error(`Error fetching "Live Anywhere" data.`);

  return live_anywhere_data as LiveAnywhereData[];
}
