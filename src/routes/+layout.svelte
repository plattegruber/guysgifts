<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav></Nav>
<div class="bg-slate-900">
	<div class="overflow-hidden pt-32 sm:pt-14">
		<div class="bg-slate-800">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="relative pb-16 pt-48 sm:pb-24">
					<div>
						<h2
							id="sale-heading"
							class="text-4xl font-bold tracking-tight text-white md:text-5xl pb-6"
						>
							If it's not awesome,
							<br />
							we don't list it.
						</h2>
						<p class="text-white text-sm text-slate-300">
							This isn't your run-of-the-mill listicle website.<br />Browse and get inspired. Find
							the perfect gift.
						</p>
						<div class="mt-6 text-base">
							<button
								class="font-semibold text-white"
								on:click={() =>
									document.getElementById('gift-ideas')?.scrollIntoView({ behavior: 'smooth' })}
							>
								Here's what guys love
								<span aria-hidden="true"> &rarr;</span>
							</button>
						</div>
					</div>

					<div
						class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0"
					>
						<div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
							<div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
								<div class="flex-shrink-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-ekaterina-bolovtsova-6690467-min.jpg"
										alt=""
									/>
								</div>

								<div class="mt-6 flex-shrink-0 sm:mt-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-rdne-stock-project-6519139-min.jpg"
										alt=""
									/>
								</div>
							</div>
							<div
								class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"
							>
								<div class="flex-shrink-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-andrea-piacquadio-3760044-min.jpg"
										alt=""
									/>
								</div>

								<div class="mt-6 flex-shrink-0 sm:mt-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-tima-miroshnichenko-5591207-min.jpg"
										alt=""
									/>
								</div>
							</div>
							<div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
								<div class="flex-shrink-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-shvets-production-8933576-min.jpg"
										alt=""
									/>
								</div>

								<div class="mt-6 flex-shrink-0 sm:mt-0">
									<img
										class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
										src="/images/pexels-cottonbro-studio-6832989-min.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-slate-100 pt-16" id="gift-ideas">
	<slot />
</div>
