"use server";

import { getStoryblokApi } from "@storyblok/react";

export async function getData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });

  if (!data) {
    throw new Error("Not Found");
  }

  return { data };
}
