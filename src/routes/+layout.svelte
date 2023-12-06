<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav></Nav>
<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	<slot />
</div>
