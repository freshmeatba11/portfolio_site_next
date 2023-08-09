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
          {
            "我是陳杰生，於 2021 年開始專注學習前端開發相關知識，在 UIUX Cafe 前端團隊期間，參與《第一銀行 - 007 資訊網》前台頁面製作，負責實作產品資訊、主題文章、任務活動、點數兌換等頁面，並且因應 訪客/會員 權限區別顯示內容。"
          }
        </span>
        <br />
        <br />
        <span>
          {
            "因性格特質擅長梳理脈絡、熱衷學習，隨著新知識點與技術的成長，持續優化過去製作的專案成果。在前端的工作領域中也能更快地掌握相關需求。於時效性高的專案中也能妥善分配資源，達到最高的效益。"
          }
        </span>
      </p>
    </article>
  );
};

export default AboutMe;
