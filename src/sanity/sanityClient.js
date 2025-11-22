import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "k06kgk7u",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-01",     
});

export async function getHomePage() {
  const query = `*[_type == "homePage"][0]`;  
  return await client.fetch(query);
}


