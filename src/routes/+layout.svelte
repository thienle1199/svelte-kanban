<script lang="ts">
	import AppSidebar from "$lib/components/layout/app-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	import '../app.css';

	let { children, data } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar activeBoard={data.activeBoard} boards={data.boards} />
	<main>
	  <Sidebar.Trigger />
	  {@render children?.()}
	</main>
  </Sidebar.Provider>