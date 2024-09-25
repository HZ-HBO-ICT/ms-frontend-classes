<script>
	export let contents;
</script>

<div class="appointment" id={contents.id}>
	{#if contents.appointment}
		<ul class="bg-amber-100 flex flex-wrap justify-between rounded-lg">
			<li class="mr-2 p-2 rounded-l-lg">{contents.starttime}</li>
			<li class="mr-2 p-2">{contents.appointment.name}</li>
			<li class="mr-2 p-2">{contents.appointment.breed}</li>
		</ul>
	{:else}
		<ul class="flex flex-wrap justify-between bg-slate-100 rounded-lg">
			<li class="bg-slate-100 mr-2 p-2 rounded-l-lg">{contents.starttime}</li>
			<li class="bg-slate-100 mr-2 p-2">No appointment</li>
		</ul>
	{/if}
</div>
