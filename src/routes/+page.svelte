<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
	>
		{#each data.products as product}
			<ProductCard
				name={product.name}
				description={product.description}
				imageUrl={product.imageUrl}
				url={product.url}
				tags={product.tags}
			></ProductCard>
		{/each}
	</li>
</ul>
