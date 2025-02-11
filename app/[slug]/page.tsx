import { getSettings } from "@/data/get-settings";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

type Params = Promise<{ slug: string }>;
export async function getData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams);

  return { data };
}

const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const settings = await getSettings();
  return (
    <StoryblokStory
      story={story.data.data.story}
      settings={settings.data.data.story}
    />
  );
};

export default Page;
