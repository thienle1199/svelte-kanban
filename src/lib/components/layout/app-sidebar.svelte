<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { cn } from '$lib/utils';
	import BoardIcon from './board-icon.svelte';
	type Props = {
		boards: {
			id: number;
			name: string;
		}[];
		activeBoard?: string;
	};
	let { boards, activeBoard }: Props = $props();
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>ALl BOARD ({boards.length})</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each boards as item (item.id)}
						<Sidebar.MenuItem class={cn({
							"bg-primary": activeBoard === item.id.toString()
						})}>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href="/board/{item.id}" {...props}>
										<BoardIcon fill={activeBoard === item.id.toString() ? "#fff" : "#828FA3"} />
										<span>{item.name}</span>
										{#if activeBoard === item.id.toString()}
											<span >active</span>
										{/if}
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
