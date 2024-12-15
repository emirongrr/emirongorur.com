import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export const sanityFetch = async <QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> => {
  try {
    const data = await client.fetch<QueryResponse>(query, qParams, {
      next: { tags },
    });
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw error;  // Ensure you rethrow or handle errors
  }
};