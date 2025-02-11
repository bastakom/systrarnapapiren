import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  blok: {
    title: string;
    booking_title: string;
    booking_link: {
      cached_url: string;
    };
    menu_link_title: string;
    menu_link: {
      cached_url: string;
    };
    subtitle: string;
    content: string;
    logo: {
      filename: string;
      name: string;
    };
    bg: {
      filename: string;
      alt: string;
    };
    buttons: {};
  };
}

export const HeroSection = ({ blok }: HeroSectionProps) => {
  const { booking_title, booking_link, menu_link_title, menu_link, logo } =
    blok;

  return (
    <div
      className="hero-content h-[100vh] lg:h-[110vh] flex"
      {...storyblokEditable}
    >
      <div className="absolute top-0 h-[120%] lg:h-[110vh] overflow-hidden w-full bg-[#3d52a0] opacity-20  z-10 " />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full object-cover h-[120%] lg:h-[110vh]"
      >
        <source
          src="https://systrarnapapiren.se/wp-content/uploads/2024/05/systrana.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container flex flex-col items-center justify-center gap-4 z-20">
        <div className="w-[65%] lg:w-[35%] h-[25%] lg:h-[35%] relative z-30 mb-4 mt-20 lg:mt-20">
          <Image
            src={logo.filename}
            fill
            className="object-contain"
            alt={logo.name}
          />
        </div>

        <div className="flex flex-col gap-5 items-center">
          <h1 className="lg:max-w-[80%] 2xl:max-w-[60%] flex text-white">
            {blok.title}
          </h1>
          <h2 className="text-2xl text-center lg:text-3xl lg:text-start lg:max-w-[50%] flex rendered-content">
            {blok.subtitle}
          </h2>
        </div>
        {blok.content && (
          <p className="lg:max-w-[80%] 2xl:max-w-[50%] flex text-color">
            {blok.content}
          </p>
        )}
        <Link className="mb-4 mt-4" href={menu_link.cached_url}>
          {menu_link_title}
        </Link>
        <Link href={booking_link.cached_url}>{booking_title}</Link>
      </div>
    </div>
  );
};
