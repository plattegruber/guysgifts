<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="bg-gray-100">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<h2 class="text-2xl font-bold text-gray-900">Blog</h2>

			<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
				{#each data.posts as post}
					<div class="group relative">
						<div
							class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
						>
							<img
								src={post.mainImageUrl + '?w=500'}
								alt=""
								class="h-full w-full object-cover object-center"
							/>
						</div>
						<p class="mt-6 text-sm text-gray-500">
							<a href={'/blog/' + post.slug.current}>
								<span class="absolute inset-0"></span>
								by {post.author.name}
							</a>
						</p>
						<h3 class="text-base font-semibold text-gray-900">{post.title}</h3>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
