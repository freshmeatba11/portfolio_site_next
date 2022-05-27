import clsx from "clsx";

const AboutMe = () => {
  return (
    <article
      className={clsx(
        "h-full pt-[10vh] px-8 snap-start",
        "flex flex-col items-center justify-center gap-10",
        "lg:pt-[5vh] lg:px-[5vw]",
        "xl:px-[10vw] xl:gap-20"
      )}
      id="aboutme"
    >
      <h2
        className={clsx("text-white text-2xl tracking-widest", "lg:text-3xl")}
      >
        About Me
      </h2>
      <p className={clsx("max-w-3xl text-justify text-white/70", "lg:text-lg")}>
        <span>
          {`我是陳杰生，於2021年開始於 Udemy 專注學習前端開發相關知識，於六個月內完成所有訓練課程及專案成果，除了熟稔 JavaScript (ES6)、HTML5、CSS3 等前端相關技術外，訓練過程也包含 SCSS
      / Tailwind 編譯、Axios / JSON 資料串接、Git 版本控制、React 前端框架、使用 VS Code 開發...等技術知識。`}
        </span>
        <br />
        <span>
          因性格特質擅長梳理脈絡、熱衷學習，隨著新知識點與技術的成長，持續優化過去製作的專案成果。
        </span>
      </p>
    </article>
  );
};

export default AboutMe;
