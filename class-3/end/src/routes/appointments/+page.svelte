<script>
	export let data;
	console.log(data);
</script>

<section>
	<h2 class="text-center text-2xl">Appointments</h2>

	<ul>
		{#each data.items.data as item}
			<li>{item}</li>
		{/each}
	</ul>
</section>
