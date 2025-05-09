import { supabase } from "$lib/supabaseClient";

  export async function load({params}) {

    const getBoardData = async (boardId: string) => supabase
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
    .eq("id", Number(boardId))
    .single()

    

    return {
      getBoardData: getBoardData(params.id),
    };
  }