import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import projectList from "./project-list";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import GithubSvg from "../public/github.svg";
import SiteSvg from "../public/site.svg";

const RedirectButton = ({ data }) => {
  return (
    <div
      className={clsx(
        "w-full px-4 py-8 rounded-[100px]",
        "flex justify-start place-items-center gap-x-8 gap-y-4 flex-wrap"
      )}
    >
      {data.github && (
        <Link href={data.github}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "group",
              "min-w-fit w-[50%] max-w-[150px] border border-transparent py-2 px-4",
              "rounded-[100px] bg-white text-gray-900",
              "flex place-items-center justify-evenly gap-2",
              "transition-all duration-300",
              "hover:border-white hover:bg-gray-900 hover:text-white"
            )}
          >
            <GithubSvg
              className={clsx(
                "w-8 h-8 fill-gray-700 ",
                "transition-all duration-300",
                "group-hover:fill-white"
              )}
              title="GitHub"
            />
            <span className="">GitHub</span>
          </a>
        </Link>
      )}

      {data.link && (
        <Link href={data.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "group",
              "min-w-fit w-[50%] max-w-[150px] border border-transparent py-2 px-4",
              "rounded-[100px] bg-white text-gray-900",
              "flex place-items-center justify-evenly gap-2",
              "transition-all duration-300",
              "hover:border-white hover:bg-gray-900 hover:text-white"
            )}
          >
            <SiteSvg
              className={clsx(
                "w-8 h-8",
                "transition-all duration-300",
                "group-hover:stroke-white"
              )}
              title="Website"
            />
            <span className="">WebSite</span>
          </a>
        </Link>
      )}
    </div>
  );
};

const Line = () => {
  return (
    <div
      className={clsx(
        "py-8 opacity-90",
        "flex justify-center items-center gap-3 last:hidden",
        "xl:py-12"
      )}
    >
      <div className="w-6 h-0 border border-white border-b-0"></div>
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <div className="w-6 h-0 border border-white border-b-0"></div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <>
      <section
        className={clsx(
          "flex flex-col gap-4 snap-start scroll-mt-[10vh]",
          "xl:flex-row"
        )}
      >
        {data.imgList.length > 0 && (
          <Swiper
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className="w-full max-w-screen-lg h-full"
          >
            {data.imgList.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image
                    className="w-full object-cover bg-cyan-900 rounded-xl"
                    src={img}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <div className={clsx("p-2", "xl:w-2/5", "2xl:w-1/2 2xl:p-12")}>
          <h3
            className={clsx(
              "text-white text-xl tracking-widest",
              "lg:text-3xl"
            )}
          >
            {data.name}
          </h3>
          <div className={clsx("py-4 text-sm text-white/70", "lg:text-lg")}>
            {data.descriptionList.map((desc, i) => {
              return <p key={i}>{desc}</p>;
            })}
          </div>
          <ul className={clsx("p-2 text-sm text-white/70", "lg:text-lg")}>
            {data.toolList.map((tool, i) => {
              return (
                <li key={i}>
                  <span className="pl-1 pr-2">•</span>
                  <span>{tool}</span>
                </li>
              );
            })}
          </ul>
          <RedirectButton data={data} />
        </div>
      </section>

      <Line />
    </>
  );
};

const Project = () => {
  return (
    <article
      className={clsx(
        "h-fit pt-[10vh] px-8 pb-[10vh] snap-start",
        "flex flex-col items-center gap-10"
      )}
      id="project"
    >
      <h2
        className={clsx(
          "pt-8 text-white text-2xl tracking-widest",
          "lg:text-3xl"
        )}
      >
        Project
      </h2>
      <div className="w-full">
        {projectList &&
          projectList.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
      </div>
    </article>
  );
};

export default Project;
