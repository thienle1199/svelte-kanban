<script>
    let { data } = $props();
  </script>
  <ul>
    {#each data.boards as board}
      <li>{board.name}</li>
    {/each}
  </ul>