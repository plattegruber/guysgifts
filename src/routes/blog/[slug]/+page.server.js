import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/private';

export const config = {
	isr: {
		// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
		expiration: 30,
		allowQuery: []
	}
};

const client = createClient({
	projectId: env.SANITY_PROJECT_ID,
	dataset: env.SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-12-04'
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		post: await client.fetch(
			`
            *[_type == "post" && slug.current == "` +
				params.slug +
				`"][0] {
				slug, 
				title, 
				body, 
				"mainImageUrl": mainImage.asset->url, 
				 author->{
				   name, 
				   "imageUrl": image.asset->url
				 }
			  }
            `
		)
	};
}
