<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#each data.products as product}
	<p>{product.name}</p>
{/each}
