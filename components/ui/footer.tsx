import { getSettings } from "@/data/get-settings";
import { FooterSection } from "./footer-section";

export const Footer = async () => {
  const settings = await getSettings();
  return <FooterSection settings={settings.data.data.story.content} />;
};
