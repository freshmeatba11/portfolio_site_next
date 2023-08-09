import clsx from "clsx";
import Image from "next/image";
import Selfie from "../public/images/selfie/selfie01.webp";

const SelfInfo = () => {
  return (
    <article
      className={clsx(
        "h-full pt-[10vh] snap-start",
        "flex flex-col items-center justify-center gap-10",
        "lg:flex-row "
      )}
      id="selfinfo"
    >
      <div
        className={clsx(
          "w-[200px] h-[200px]",
          "lg:w-[400px] lg:h-[400px]",
          "select-none"
        )}
      >
        <Image src={Selfie} alt="" className="rounded-xl" />
      </div>
      <div className="px-8 grid gap-4">
        <h1
          className={clsx(
            "text-center text-xl tracking-wider text-white",
            "lg:text-3xl"
          )}
        >
          陳杰生 Jason
        </h1>
        <div className="text-lg text-white/70">
          <p># Front-end Engineer</p>
          <p># Life-time Learner</p>
          <p># Craft Beer Lover</p>
          <p># Coffee Holic</p>
        </div>
      </div>
    </article>
  );
};

export default SelfInfo;
