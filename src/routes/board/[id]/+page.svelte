<script>
    let {data} = $props();
</script>

<h1>Board detail</h1>
{#await data.getBoardData}
   <h1>Loading...</h1>
{:then board} 
<pre>
    {JSON.stringify(board)}
</pre>
{/await}
