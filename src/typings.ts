import { z } from "zod";

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
