import { supabase } from "$lib/supabaseClient";
  export async function load({params}) {
    const { data } = await supabase.from("boards").select();
    return {
      boards: data ?? [],
      activeBoard: params.id
    };
  }