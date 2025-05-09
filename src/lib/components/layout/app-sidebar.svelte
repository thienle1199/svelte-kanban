<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import BoardIcon from './board-icon.svelte';
	type Props = {
		boards: {
			id: number;
			name: string;
		}[];
	};
	let { boards }: Props = $props();
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>ALl BOARD ({boards.length})</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each boards as item (item.id)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href="/board/{item.id}" {...props}>
										<BoardIcon fill="red" />
										<span>{item.name}</span>
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
