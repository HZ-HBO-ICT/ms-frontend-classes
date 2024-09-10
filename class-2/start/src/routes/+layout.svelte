<script>
	import "../app.css";
</script>

<div class="flex flex-col h-screen justify-between">
	<header class="bg-orange-50">
		<h1 class="p-4 text-lg">🐍 Veterinarian</h1>
	</header>
	<main>
		<slot />
	</main>

	<footer class="">
		<p class="p-2 text-center">Made with ❤️ </p>
	</footer>
</div>

<style>
</style>
