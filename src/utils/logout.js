import { supabaseClient } from "./supabase_helper";

export default function logout(){
    supabaseClient.auth.signOut()
}