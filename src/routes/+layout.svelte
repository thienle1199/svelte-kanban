<script lang="ts">
	import '../app.css';

	let { children, data } = $props();
</script>
<aside class="flex flex-col gap-3">
	{#each data.boards as board}
	<a href="/board/{board.id}">{board.name}</a>
	{/each}
</aside>

{@render children()}
