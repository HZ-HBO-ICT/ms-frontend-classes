<script>
	import { onMount } from 'svelte';
	import TimeSlot from './TimeSlot.svelte';

	// genericData is an array that will hold the data from the API
	let genericData = [];

	//get date from an api
	onMount(async () => {
		const response = await fetch('https://appointments-fe6c.onrender.com/api/v1/timeslots/');
		const jsonData = await response.json();
		// only read the data property from the response
		genericData = jsonData.data;
	});
</script>

<div>
    <!-- Await the genericData promise -->
	{#await genericData}
		<p>Fetching timeslots...</p>
	{:then timeslotEntries}
		{#each timeslotEntries as timeslotEntry}
			<TimeSlot timeslotUrl={timeslotEntry} />
		{/each}
	{/await}
</div>
