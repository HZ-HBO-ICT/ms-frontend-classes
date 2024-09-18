<script>
	import { page } from '$app/stores';
</script>

<div class="container mx-auto flex flex-col justify-center">
    <h1 class="text-8xl text-center">😭</h1>
    <p class="text-center">{$page.error.message}</p>
</div>
