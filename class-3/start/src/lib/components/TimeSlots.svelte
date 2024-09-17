<script>
	import { getContext, onMount } from 'svelte';
	import TimeSlot from './TimeSlot.svelte';

	let data = [];
	let loading = true;
	let error = null;

	// Example API: replace with your own API endpoint
	const apiUrl = `http://localhost:3012/api/v1/timeslots/`;

	// Fetching data on component mount
	onMount(async () => {
		try {
			const response = await fetch(apiUrl);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			data = await response.json();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

<!-- Loading state -->
{#if loading}
	<p>Loading...</p>
{/if}

<!-- Error state -->
{#if error}
	<p>Error: {error}</p>
{/if}

<!-- Render data when available -->
{#if !loading && !error}
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each data.data as item}
			<TimeSlot timeslotUrl={item} />
		{/each}
	</div>
{/if}
