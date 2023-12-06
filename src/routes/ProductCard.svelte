<script>
	export let name = '';
	export let description = '';
	export let imageUrl = '';
	export let url = '';
	/**
	 * @type {string[]}
	 */
	export let tags = [];
</script>

<div class="flex flex-1 flex-col">
	<img class="h-48 w-full object-none" src={imageUrl + '?w=200'} alt="" />
	<h3 class="mt-6 text-sm font-medium text-gray-900 px-8">{name}</h3>
	<dl class="mt-1 flex flex-grow flex-col justify-between px-8 pb-8">
		<dt class="sr-only">Product description</dt>
		<dd class="text-sm text-gray-500">{description}</dd>
		<dt class="sr-only">Tags</dt>
		<dd class="mt-3">
			{#each tags as tag}
				<span
					class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
					>{tag}</span
				>
			{/each}
		</dd>
	</dl>
</div>
<div>
	<div class="-mt-px flex divide-x divide-gray-200">
		<div class="flex w-0 flex-1"></div>
		<div class="-ml-px flex w-0 flex-1">
			<a
				href={url}
				target="_blank"
				class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
			>
				View
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-3 h-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
