<script>
	import { onMount } from 'svelte';

	export let dateUrl;

	// genericData is an array that will hold the data from the API
	let genericData = [];

	//get date from an api
	onMount(async () => {
		const myUrl = `http://localhost:3012/api/v1${dateUrl}`;
		const response = await fetch(myUrl);
		const jsonData = await response.json();
		// // only read the data property from the response
		genericData = jsonData;
		console.log(genericData);

		//TODO: add error handling
	});
</script>

<!-- improvet this HTML and CSS -->
<li>🐉 - {genericData.month} - {genericData.day}</li>
