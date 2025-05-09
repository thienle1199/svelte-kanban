import { supabase } from "$lib/supabaseClient";
  export async function load({params}) {
    console.log('params', params)
    
    const { data } = await supabase
    .from("boards")
    .select(
      `
      id,
      name,
       columns (
         id,
         name,
         tasks (
            *,
            sub_tasks (
              *
            )
          )
      )
      `
    )
    .eq("id", Number(params.id))
    .single()

    return {
      board: data,
    };
  }