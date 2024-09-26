<script>
	// data is a prop passed from the server
	export let data;
</script>

<section class="container">
	<h2 class="text-center text-2xl my-6">Appointments</h2>
	<table class="table-auto border-separate w-screen text-xs text-center">
		<thead><tr><th>Date</th><th>Timeslot</th><th>Name</th><th>Breed</th><th>State</th></tr></thead>
		<tbody>
			{#each data.appointments as item}
				<tr class="odd:bg-white even:bg-slate-50 hover:bg-orange-50 hover:cursor-pointer"
					><td class="p-3">{item.theDateId}</td><td>{item.timeslotId}</td><td>{item.name}</td><td
						>{item.breed}</td
					><td>{item.state}</td></tr
				>
			{/each}
		</tbody>
	</table>
</section>
