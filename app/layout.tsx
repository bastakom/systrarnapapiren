import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.scss";
import { StoryblokProvider } from "../components/StoryblokProvider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Systrarna på piren",
  description:
    "Din sommarkrog i Mölle med hamnens största uteservering direkt mot havet och solnedgången. ",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
