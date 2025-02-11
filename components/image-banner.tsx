"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";
import { LinkType } from "./lib/interface";

interface ImageBannerProps {
  blok: {
    title: string;
    image: {
      filename: string;
      name: string;
    };
    link: LinkType;
    content: React.ReactNode;
    button_title: string;
    category: string;
  };
}

export const ImageBanner = ({ blok }: ImageBannerProps) => {
  const { title, image, content, button_title } = blok;
  const { open, setOpen, setCategory } = useStore();

  const handleOnClick = () => {
    setOpen(!open);
  };

  const categoryString = Array.isArray(blok.category)
    ? blok.category.join(", ")
    : blok.category;

  const handleSetValue = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="h-[75vh] lg:h-[90vh] relative">
      <div className="h-[100%] lg:h-[85%] relative">
        <Image
          src={image.filename}
          fill
          className="object-cover"
          alt={image.name}
        />
        <div
          id={title !== "Meny" ? "menu" : undefined}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white gap-4 lg:gap-8 p-4 bg-black bg-opacity-40"
        >
          <h2 className="font-bold">{title}</h2>

          <div className="image-banner-content lg:w-[50%]">
            {render(content)}
          </div>

          <button
            className="mt-4 px-6 py-2 bg-[#569fd4] text-[20px] text-white rounded hover:bg-white hover:text-black"
            onClick={() => {
              handleOnClick();
              handleSetValue(categoryString);
            }}
          >
            {button_title}
          </button>
        </div>
      </div>
    </div>
  );
};
