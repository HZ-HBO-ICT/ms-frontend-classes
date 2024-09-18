<script>
	import DateComponent from "$lib/components/DateComponent.svelte";
	export let data;
	console.log(data);
</script>

<section>
	<h2 class="text-center text-2xl">Dates</h2>

	<ul>
		{#each data.items.data as item}
			<!-- <li>{item}</li> -->
			 <DateComponent dateUrl={item} />
		{/each}
	</ul>
</section>
