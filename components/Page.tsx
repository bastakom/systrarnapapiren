"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { ImageBlock } from "./image-block";

const Page = ({ blok, settings }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok &&
        Array.isArray(blok.body) &&
        blok.body.map((nestedBlok: any, index: number) => (
          <StoryblokComponent
            blok={nestedBlok}
            settings={settings}
            key={nestedBlok._uid}
          />
        ))}
    </div>
  );
};

export default Page;
