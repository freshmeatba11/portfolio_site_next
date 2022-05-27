import Image from "next/image";
import clsx from "clsx";
import projectList from "./project-list";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import GithubSvg from "../public/github.svg";
import webPageIcon32 from "../public/web-page.png";

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
          className="w-full max-w-screen-lg h-full rounded-xl"
        >
          {data.imgList.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  className="w-full object-cover bg-cyan-900"
                  src={img}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={clsx("p-2", "xl:w-2/5", "2xl:w-1/2 2xl:p-12")}>
          <div>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-block w-8 h-8 opacity-70",
                "transition-all duration-300",
                "hover:opacity-100"
              )}
            >
              <GithubSvg className="w-9 h-9 fill-white" title="GitHub" />
            </a>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-block w-8 h-8 ml-4 opacity-70",
                "transition-all duration-300",
                "hover:opacity-100"
              )}
            >
              <Image src={webPageIcon32} alt="Website" />
            </a>
          </div>
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
