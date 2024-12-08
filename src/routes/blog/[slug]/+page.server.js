import grayMatter from 'gray-matter';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const fileUrl = `/content/posts/${params.slug}.md`; // URL of the Markdown file in the static folder

  // Fetch the Markdown file
  const response = await fetch(fileUrl);
  if (!response.ok) {
    throw new Error(`Post not found for slug: ${params.slug} (${response.statusText})`);
  }

  const fileContents = await response.text();

  // Parse the front matter and content using gray-matter
  const { data: frontMatter, content: body } = grayMatter(fileContents);

  // Return the parsed post data
  return {
    post: {
      ...frontMatter,
      body,
    },
  };
}

