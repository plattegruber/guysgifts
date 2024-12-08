import yaml from 'js-yaml';

/**
 * @typedef {Object} Product
 * @property {string} name - The name of the product
 * @property {string} description - A brief description of the product
 * @property {string} url - A URL to the product
 * @property {string[]} tags - Tags associated with the product
 * @property {string} imageUrl - URL of the product's image
 */

/**
 * @typedef {Object} ProductsData
 * @property {Product[]} products - List of products
 */


/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
  const response = await fetch('/content/products.yaml');
  if (!response.ok) {
    throw new Error(`Failed to fetch products.yaml: ${response.statusText}`);
  }
  const fileContents = await response.text();

  /** @type {ProductsData} */
  // @ts-ignore
  const { products } = yaml.load(fileContents);

  return { products };
}
