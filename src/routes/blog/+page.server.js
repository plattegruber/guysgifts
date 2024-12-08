import grayMatter from 'gray-matter';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  // Base directory for posts in the static folder
  const baseDir = '/content/posts';

  // Fetch the list of filenames in the directory
  const indexResponse = await fetch(`${baseDir}/index.json`);
  if (!indexResponse.ok) {
    throw new Error(`Failed to fetch index.json: ${indexResponse.statusText}`);
  }
  const fileNames = await indexResponse.json(); // e.g., ["post1.md", "post2.md"]

  // Fetch and parse each file's contents
  const posts = await Promise.all(
    fileNames.map(async (/** @type string **/ fileName) => {
      const fileResponse = await fetch(`${baseDir}/${fileName}`);
      if (!fileResponse.ok) {
        throw new Error(`Failed to fetch ${fileName}: ${fileResponse.statusText}`);
      }
      const fileContents = await fileResponse.text();

      // Parse the front matter from the file
      const { data: frontMatter } = grayMatter(fileContents);

      // Return metadata
      return {
        slug: frontMatter.slug,
        title: frontMatter.title,
        mainImageUrl: frontMatter.mainImageUrl,
        author: frontMatter.author,
      };
    })
  );

  return { posts };
}
