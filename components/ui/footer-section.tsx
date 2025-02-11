import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { LinkType } from "../lib/interface";

interface FooterProps {
  settings: {
    image: {
      filename: string;
      name: string;
    };
    adress: string;
    phone_number: string;
    link_title: string;
    link: {
      cached_url: string;
    };
    fb_link: {
      cached_url: string;
    };
    ig_link: {
      cached_url: string;
    };
    logo: {
      filename: string;
      name: string;
    };
    footer_menu: LinkType[];
  };
}

export const FooterSection = ({ settings }: FooterProps) => {
  const {
    image,
    footer_menu,
    logo,
    fb_link,
    ig_link,
    link_title,
    adress,
    phone_number,
  } = settings;
  return (
    <footer className="relative w-[100%] h-[80vh] lg:h-[80vh]">
      <Image
        src={image.filename}
        alt={image.name}
        fill
        className="object-cover object-bottom"
      />
      <div className="lg:grid lg:grid-cols-3 absolute top-10 w-[100%] h-[60vh] my-auto">
        <div className="flex justify-center items-center">
          <ul className="hidden lg:flex flex-col gap-4">
            {footer_menu.map((el: LinkType, index: number) => {
              return (
                <Link
                  className="text-white text-[22px] uppercase"
                  href={el.link.cached_url}
                  key={index}
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-10 lg:gap-20 mt-20">
          <Image src={logo.filename} alt={logo.name} width={240} height={140} />
          <div className="flex gap-4">
            <Link href={fb_link.cached_url}>
              <BiLogoFacebook fontSize={40} className="text-white" />
            </Link>
            <Link href={ig_link.cached_url}>
              <IoLogoInstagram fontSize={40} className="text-white" />
            </Link>
          </div>
          <div className="text-center text-white text-[16px]">
            <Link href={`mailto:${link_title}`}>{link_title}</Link>
            <div className="contact-info pt-2 lg:pt-0">
              {adress && <span className="adress pb-2 lg:pb-0">{adress}</span>}
              {adress && phone_number && <span className="separator"> | </span>}
              {phone_number && (
                <span className="phone-number">{phone_number}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
