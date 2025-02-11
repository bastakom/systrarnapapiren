import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useStore from "./lib/store";

interface CTAProps {
  blok: {
    title: string;
    button_title: string;
    image: {
      filename: string;
      name: string;
    };
    button: {
      cached_url: string;
    };
    second_image: {
      filename: string;
      name: string;
    };
  };
  settings: {
    content: {
      adress: string;
      phone_number: string;
      link: {
        cached_url: string;
        url: string;
      };
      opening_title: string;
      content: React.ReactNode;
    };
  };
}

export const CTABlock = ({ blok, settings }: CTAProps) => {
  const { openingHours, setOpeningHours } = useStore();

  const onClickHandler = () => {
    setOpeningHours(!openingHours);
  };

  const { image, title, second_image, button, button_title } = blok;
  const { content } = settings;

  return (
    <div id="contact" className="grid lg:grid-cols-2 w-[100%] mx-auto mt-16">
      <div className="relative w-full h-[65vh] lg:h-[68vh] bg-[#569fd4]">
        <div className="contact absolute top-[12%] left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 gap-2 min-h-[60vh] ">
          <h2>{title}</h2>
          <div>{content.adress}</div>
          <div>{content.phone_number}</div>
          <Link href={`mailto:${content.link.cached_url}`}>
            {content.link.url}
          </Link>
          <div className="footer-content  text-white h-[100%] lg:h-[100%]">
            <div className="flex items-center justify-center gap-2 cursor-pointer lg:min-w-[15vw]">
              <h2 className="text-[20px] lg:text-[30px]">
                {content.opening_title}
              </h2>
              {openingHours}
            </div>

            <div className="flex justify-center text-center">
              {render(content.content)}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[65vh] lg:h-[68vh]">
        <Image
          src={second_image.filename}
          fill
          className="object-cover"
          alt={second_image.filename}
        />
        <div className="contact absolute top-14 lg:top-24 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 gap-4">
          <Link
            className="mt-4 px-6 py-2 bg-[#569fd4] !text-[14px] lg:!text-[20px] !font-semibold hover:bg-white hover:text-black text-white rounded"
            href={button.cached_url}
          >
            {button_title}
          </Link>
        </div>
      </div>
    </div>
  );
};
