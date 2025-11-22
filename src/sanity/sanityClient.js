import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "k06kgk7u",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-11-22",
});

