import { z } from "zod";

const SearchParamsSchema = z.object({
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  numOfGuests: z.number().min(1),
});

export type SearchParams = z.infer<typeof SearchParamsSchema>;

const SearchListingsDataSchema = z.object({
  id: z.number(),
  img: z.string(),
  location: z.string(),
  title: z.string(),
  description: z.string(),
  star: z.number(),
  price: z.string(),
  total: z.string(),
  longitude: z.number(),
  latitude: z.number(),
});

export type SearchListingsData = z.infer<typeof SearchListingsDataSchema>;

const ExploreNearbyDataSchema = z.object({
  id: z.number(),
  created_at: z.string(),
  img: z.string(),
  location: z.string(),
  distance: z.string(),
});

export type ExploreNearByData = z.infer<typeof ExploreNearbyDataSchema>;

const LiveAnywhereDataSchema = z.object({
  id: z.number(),
  created_at: z.string(),
  img: z.string(),
  title: z.string(),
});

export type LiveAnywhereData = z.infer<typeof LiveAnywhereDataSchema>;
