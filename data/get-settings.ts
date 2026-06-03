"use server";

import { getStoryblokApi } from "@storyblok/react";
import { unstable_noStore as noStore } from "next/cache";

export async function getSettings() {
  noStore();

  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/settings`, sbParams);

  if (!data) {
    throw new Error("Not Found");
  }

  return { data };
}
