import { supabase } from "$lib/supabaseClient";
  export async function load() {
    const { data } = await supabase.from("boards").select();
    return {
      boards: data ?? [],
    };
  }