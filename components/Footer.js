import Link from "next/link";
import clsx from "clsx";

const Footer = () => {
  let linkTo = "https://github.com/freshmeatba11";
  if (process.env.NEXT_PUBLIC_profileLink) {
    linkTo = process.env.NEXT_PUBLIC_profileLink;
  }
  return (
    <footer
      className={clsx(
        "mx-auto w-[90vw] h-[30vh] pt-24 snap-end",
        "grid justify-items-center content-center gap-4",
        "text-white",
        "relative"
      )}
    >
      <hr className="w-full border border-b-0 border-white" />
      <p className="tracking-[.1em] text-center">
        Copyright © {`${new Date().getFullYear()} `}
        <Link href={linkTo}>
          <a target="_blank" rel="noopener noreferrer">
            meatba11&#8629;
          </a>
        </Link>
        <br />
        <Link href="https://www.flaticon.com/free-icons/site">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-2 text-sm text-white/50"
          >
            Site icon by Ilham Fitrotul Hayat - Flaticon
          </a>
        </Link>
        <Link href="https://icons8.com/icon/106562/github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-white/50"
          >
            GitHub
          </a>
        </Link>
        <span className="inline-block text-sm text-white/50">
          &nbsp;/&nbsp;
        </span>
        <Link href="https://icons8.com/icon/84884/instagram">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-white/50"
          >
            Instagram
          </a>
        </Link>
        <span className="inline-block text-sm text-white/50">
          &nbsp;/&nbsp;
        </span>
        <Link href="https://icons8.com/icon/yxl4mWkjeDCS/gmail">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-white/50"
          >
            Gmail
          </a>
        </Link>
        <span className="inline-block text-sm text-white/50">
          &nbsp;icons by&nbsp;
        </span>
        <Link href="https://icons8.com">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-white/50"
          >
            Icons8
          </a>
        </Link>
      </p>
      <Link href="#selfinfo">
        <a
          title="Top"
          className={clsx(
            "w-4 h-4 rotate-45 text-transparent",
            "border-2 border-white/70 border-r-0 border-b-0",
            "absolute top-20 left-1/2 -translate-x-1/2",
            "transition-all duration-300",
            "hover:border-white/100"
          )}
        >
          top
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
