import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// uses GROQ to query content: https://www.sanity.io/docs/groq
	console.log(env)
	const client = createClient({
		projectId: env.SANITY_PROJECT_ID,
		dataset: env.SANITY_DATASET,
		useCdn: false,
		apiVersion: '2023-12-04'
	});
	const products = await client.fetch('*[_type == "product"]');
	return {
	products: products
	};
}
