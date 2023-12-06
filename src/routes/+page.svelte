<script>
	import ProductCard from './ProductCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each data.products as product}
		<li
			class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow bg-white"
		>
			<ProductCard
				name={product.name}
				description={product.description}
				imageUrl={product.imageUrl}
				url={product.url}
				tags={product.tags}
			></ProductCard>
		</li>
	{/each}
</ul>
