import Image from "next/image";
import Logo from "../../public/inkbit_logo.png";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-3 px-6 md:px-12 lg:px-36 md:py-10 bg-light dark:bg-dark">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-2 md:px-3">
          <Image src={Logo} width={130} height={130} alt="Inkbit" />
          <p className="text-sm md:text-md font-light mt-5 text-dark dark:text-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:items-end">
          <div>
            <h3 className="text-dark dark:text-light">Quick Links</h3>
            <ul className="w-fit text-dark dark:text-light">
              <li
                className="animated-underline mt-5 mb-3"
                style={{ display: "block", width: "fit-content" }}
              >
                <Link href="#">Home</Link>
              </li>
              <li
                className="animated-underline mb-3"
                style={{ width: "fit-content" }}
              >
                <Link href="#">Write</Link>
              </li>
              <li
                className="animated-underline mb-3"
                style={{ display: "block", width: "fit-content" }}
              >
                <Link href="#">About</Link>
              </li>
              <li
                className="animated-underline"
                style={{ display: "block", width: "fit-content" }}
              >
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex items-center md:justify-end">
          <div>
            <h4 className="text-md mb-4 font-semibold text-dark dark:text-light">
              Follow us on
            </h4>
            <div className="flex gap-3">
              <SocialIcons Icon={FaFacebookF} slug="#" />
              <SocialIcons Icon={FaInstagram} slug="#" />
              <SocialIcons Icon={FaGithub} slug="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light dark:bg-dark text-center pt-10">
        <p className="text-sm text-dark dark:text-light font-extralight">
          Copyright<sup>&copy;</sup> 2025 by Pratik Tele. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
