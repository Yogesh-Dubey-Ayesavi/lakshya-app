import { createClient } from "@supabase/supabase-js";
import "dotenv";
import { LakshyaSDK } from "lakshya-sdk";
export const supabaseClient = createClient(
   import.meta.env.VITE_SUPABASE_URL,
   import.meta.env.VITE_SUPABASE_API_KEY
  ); 

export const lakshya = LakshyaSDK.initialize(supabaseClient);
