import { createClient } from "@supabase/supabase-js";
import "dotenv";
export const supabaseClient = createClient(
   import.meta.env.VITE_SUPABASE_URL,
   import.meta.env.VITE_SUPABASE_API_KEY
  ); 

