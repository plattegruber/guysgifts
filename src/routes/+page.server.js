/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	return {
		post: {
			title: `Test`
		}
	};
}
