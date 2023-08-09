import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import GithubSvg from "../public/github.svg";
import GmailSvg from "../public/gmail.svg";
import InstagramSvg from "../public/instagram.svg";
import Selfie from "../public/images/selfie/selfie02.webp";

const Contact = () => {
  return (
    <article
      className={clsx(
        "h-full pt-[10vh] px-8 snap-start",
        "flex flex-col items-center justify-center gap-10",
        "lg:px-[5vw]",
        "xl:px-[10vw] xl:gap-20"
      )}
      id="contact"
    >
      <h2
        className={clsx("text-white text-2xl tracking-widest", "lg:text-3xl")}
      >
        Contact
      </h2>
      <div className={clsx("w-[200px] h-[200px]", "lg:w-[400px] lg:h-[400px]")}>
        <Image src={Selfie} alt="" className={clsx("rounded-full")} />
      </div>
      <div className={clsx("flex gap-8", "lg:gap-16")}>
        <Link href="https://github.com/freshmeatba11">
          <a target="_blank" rel="noopener noreferrer" title="Github">
            <GithubSvg
              className={clsx(
                "w-10 h-10 fill-white/70",
                "transition-all duration-300",
                "hover:fill-white/100",
                "lg:w-16 lg:h-16"
              )}
            />
          </a>
        </Link>
        <Link href="mailto:cmjj8898212032@gmail.com">
          <a
            target="_blank"
            href="mailto:cmjj8898212032@gmail.com"
            rel="noopener noreferrer"
            title="Mail"
          >
            <GmailSvg
              className={clsx(
                "w-10 h-10 fill-white/70",
                "transition-all duration-300",
                "hover:fill-white/100",
                "lg:w-16 lg:h-16"
              )}
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/freshmeatball/">
          <a target="_blank" rel="noopener noreferrer" title="Instagram">
            <InstagramSvg
              className={clsx(
                "w-10 h-10 fill-white/70",
                "transition-all duration-300",
                "hover:fill-white/100",
                "lg:w-16 lg:h-16"
              )}
            />
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Contact;
