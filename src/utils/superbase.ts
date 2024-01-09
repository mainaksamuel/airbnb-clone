import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl)
  throw new Error("Missing Database(supabase) Credentials.");

export const supabase = createClient(supabaseUrl, supabaseKey);
