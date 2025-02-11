"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import { HeroSection } from "@/components/hero-section";
import { SectionBlock } from "./section-block";
import { ImageBanner } from "./image-banner";
import { ImageBlock } from "./image-block";
import { CooperationBlock } from "./cooperation-partners";
import { CTABlock } from "./cta-block";

storyblokInit({
  components: {
    page: Page,
    hero: HeroSection,
    section_block: SectionBlock,
    image_banner: ImageBanner,
    image_block: ImageBlock,
    cooperation_partners: CooperationBlock,
    cta_block: CTABlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
