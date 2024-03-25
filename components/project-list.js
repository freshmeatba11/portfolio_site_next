import mockup_007 from "../public/images/007/007_mockup.webp";
import mockup_weekie from "../public/images/weekie/weekie_mockup.webp";

import apartment_baofu_desk01 from "../public/images/apartment_baofu/apartment_baofu_desk01.webp";
import apartment_baofu_desk02 from "../public/images/apartment_baofu/apartment_baofu_desk02.webp";
import apartment_baofu_desk03 from "../public/images/apartment_baofu/apartment_baofu_desk03.webp";
import apartment_baofu_desk04 from "../public/images/apartment_baofu/apartment_baofu_desk04.webp";
import apartment_baofu_desk05 from "../public/images/apartment_baofu/apartment_baofu_desk05.webp";
import apartment_baofu_mobile01 from "../public/images/apartment_baofu/apartment_baofu_mobile01.webp";
import apartment_baofu_mobile02 from "../public/images/apartment_baofu/apartment_baofu_mobile02.webp";
import apartment_baofu_mobile03 from "../public/images/apartment_baofu/apartment_baofu_mobile03.webp";

import shengs_film_desk01 from "../public/images/shengs_film/shengs_film_desk01.webp";
import shengs_film_desk02 from "../public/images/shengs_film/shengs_film_desk02.webp";
import shengs_film_desk03 from "../public/images/shengs_film/shengs_film_desk03.webp";
import shengs_film_mobile01 from "../public/images/shengs_film/shengs_film_mobile01.webp";
import shengs_film_mobile02 from "../public/images/shengs_film/shengs_film_mobile02.webp";
import shengs_film_mobile03 from "../public/images/shengs_film/shengs_film_mobile03.webp";

import portfolio_site_desk01 from "../public/images/portfolio_site/portfolio_site_desk01.webp";
import portfolio_site_desk02 from "../public/images/portfolio_site/portfolio_site_desk02.webp";
import portfolio_site_desk03 from "../public/images/portfolio_site/portfolio_site_desk03.webp";
import portfolio_site_desk04 from "../public/images/portfolio_site/portfolio_site_desk04.webp";
import portfolio_site_mobile01 from "../public/images/portfolio_site/portfolio_site_mobile01.webp";
import portfolio_site_mobile02 from "../public/images/portfolio_site/portfolio_site_mobile02.webp";

import todolist_desk01 from "../public/images/todolist/todolist_desk01.webp";
import todolist_desk02 from "../public/images/todolist/todolist_desk02.webp";
import todolist_mobile01 from "../public/images/todolist/todolist_mobile01.webp";

import io_recording01 from "../public/images/io_recording/io_recording01.webp";
import io_recording02 from "../public/images/io_recording/io_recording02.webp";
import io_recording03 from "../public/images/io_recording/io_recording03.webp";
import io_recording04 from "../public/images/io_recording/io_recording04.webp";

const projectList = [
  {
    name: "007online 第一銀行數位金融優惠平台 2022/11",
    link: "https://007online.firstbank.com.tw/sites/home",
    github: "",
    imgList: [mockup_007],
    descriptionList: [
      "007資訊網站的前台，負責呈現產品資訊、主題文章、任務活動、點數兌換 等頁面，並且因應 訪客/會員 權限區別顯示內容；藉由後台介面操作 資料庫 與 後端 api 進行全站內容管理",
    ],
    toolList: [
      "Next.js - 藉由框架提升維護的便利性並強化 SEO 搜尋引擎優化",
      "TypeScript - 以型別設定提升開發時的穩定性",
      "MUI - 藉由元件庫加速開發流程",
      "Styled Components - 編輯樣式與管理",
      "React Hook Form - 協助表單狀態管理",
      "React Loading Skeleton - 建立 Loading 過渡效果提升用戶體驗",
      "Swiper - 塑造客製化的輪播圖元件",
    ],
  },
  {
    name: "IO Recording 攝入/輸出記錄表 2024/3",
    link: "https://io-recording.vercel.app/",
    github: "https://github.com/freshmeatba11/record_io_tool",
    imgList: [io_recording01, io_recording02, io_recording03, io_recording04],
    descriptionList: [
      "這個專案是收集自身經驗設計，為了降低進行紀錄工作的負擔，提供 io 紀錄時相對便利的工具。",
      "- 單筆紀錄快速建立",
      "- 表格排序顯示",
      "- 紀錄匯出 CSV 檔",
      "- 可以建立多位患者檔案進行切換",
    ],
    toolList: [
      "Next.js - 藉由框架提升維護的便利性並強化 SEO 搜尋引擎優化",
      "TypeScript - 以型別設定提升開發時的穩定性",
      "Zustand - 好上手的狀態管理方案",
      "React Hook Form - 協助表單狀態管理",
      "Styled Components - 編輯樣式與管理",
      "dayjs - 處理日期計算及格式轉換",
      "MUI - 藉由元件庫加速開發流程",
      "MUI/x-data-grid - 協助資料呈現與輸出 csv",
    ],
  },
  {
    name: "weekie 週週趣預約服務平台 2023/2",
    link: "https://shop.weekielife.com/login/",
    github: "",
    imgList: [mockup_weekie],
    descriptionList: [
      "協助開發關鍵功能模組，如：會員分級設定、客製化加購選單設定、商品CRUD...等",
    ],
    toolList: [
      "React - 藉由框架提升維護的便利性",
      "TypeScript - 以型別設定提升開發時的穩定性",
      "MUI - 藉由元件庫加速開發流程",
      "Styled Components - 編輯樣式與管理",
      "React Hook Form - 協助表單狀態管理",
      "react-i18next - 協助處理多語系切換",
    ],
  },
  {
    name: "apartment Baofu 2022/4",
    link: "https://apartmentbaofu.netlify.app/",
    github: "https://github.com/freshmeatba11/apartmentFront",
    imgList: [
      apartment_baofu_desk01,
      apartment_baofu_desk02,
      apartment_baofu_desk03,
      apartment_baofu_desk04,
      apartment_baofu_desk05,
      apartment_baofu_mobile01,
      apartment_baofu_mobile02,
      apartment_baofu_mobile03,
    ],
    descriptionList: [
      "作為租屋管理網站，提供 :",
      "1.各房型形象、內部實景",
      "2.房客生活資訊彙整",
      "3.三種使用者身份區別隱私訊息與管理功能",
      "*訪客-可以瀏覽布告欄、能源費以外的頁面",
      "*房客-可以瀏覽布告欄、能源費但無法管理內容",
      "*管理員-可以管理布告欄、能源費內容，且可以新增房客帳號",
    ],
    toolList: [
      "React - 藉由框架提升程式的複用性以及維護的便利性",
      "Axios - 串接後端API",
      "Tailwind - 快速編寫出想要的樣式",
      "MongoDB - 管理使用者資料及布告欄等內容",
      "Express - 配合DB建立RESTful風格的API",
      "Passport - 搭配JWT管理使用者認證的功能",
      "Joi - 驗證資料格式符合需求，並返還使用者錯誤提示",
    ],
  },
  {
    name: "Portfolio 2022/5",
    link: "#",
    github: "https://github.com/freshmeatba11/portfolio_site_next",
    imgList: [
      portfolio_site_desk01,
      portfolio_site_desk02,
      portfolio_site_desk03,
      portfolio_site_desk04,
      portfolio_site_mobile01,
      portfolio_site_mobile02,
    ],
    descriptionList: ["作為個人網站,提供一個快速展示作品與簡介的管道"],
    toolList: [
      "Next.js - 藉由框架提升維護的便利性並強化 SEO 搜尋引擎優化",
      "Tailwind - 配合 component 提升樣式編寫效率",
      "Swiper - 提供個人化功能且順暢的輪播圖",
      "Vercel - 發佈網站與運行管理",
    ],
  },
  {
    hideThisProject: true,
    name: "Sheng's Film Site 2021/6",
    link: "https://shengsfilm-old.netlify.app",
    github: "https://github.com/freshmeatba11/shengsFilm",
    imgList: [
      shengs_film_desk01,
      shengs_film_desk02,
      shengs_film_desk03,
      shengs_film_mobile01,
      shengs_film_mobile02,
      shengs_film_mobile03,
    ],
    descriptionList: [
      "作為個人網站呈現客戶的影像編導、剪輯作品，並輔以文字摘要說明，希望以簡練的風格傳達專業與穩定感",
    ],
    toolList: [
      "HTML - 基礎的網頁架構",
      "SCSS - 負責處理畫面視覺設定",
      "JS - 主要負責頁面跳轉的過渡效果與手機版的選單開合控制",
      "在不使用套件的前提下實現頁面跳轉的過渡動畫 : 用click監聽器設定動畫效果並在結束時執行跳轉",
    ],
  },
  {
    hideThisProject: true,
    name: "To do List Site 2021/8",
    link: "https://freshmeatba11-todolist.netlify.app/",
    github: "https://github.com/freshmeatba11/to_do_list",
    imgList: [todolist_desk01, todolist_desk02, todolist_mobile01],
    descriptionList: [
      "這個網站提供使用者記錄代辦事項的功能，並且可依日期由近到遠排序",
    ],
    toolList: [
      "HTML - 基礎的網頁架構",
      "SCSS - 處理視覺呈現",
      "JS - 使用localStorage將內容儲存在瀏覽器中，並對資料進行排序",
      "為提昇操作的互動性，使用Figma繪製SVG配合css animation製作動態icon",
    ],
  },
  {
    hideThisProject: true,
    name: "Sheng's Film Site - React 2021/11",
    link: "https://shengsfilm.netlify.app",
    github: "https://github.com/freshmeatba11/ShengsFilm-React",
    imgList: [
      shengs_film_desk01,
      shengs_film_desk02,
      shengs_film_desk03,
      shengs_film_mobile01,
      shengs_film_mobile02,
      shengs_film_mobile03,
    ],
    descriptionList: [
      "以 React 框架重新製作個人網站，以提升網站維護、管理的便利性",
    ],
    toolList: [
      "SCSS - 嘗試用組件化的概念管理css檔案",
      "React - 藉由框架提升程式的複用性以及維護的便利性",
      "React-transition-group - 可以配合元件的切換執行過渡效果",
      "想要簡單的判斷瀏覽器視窗大小來決定元件渲染與否 : 使用自製Hook搭配window.innerWidth並使用useEffect監聽resize事件",
    ],
  },
];

export default projectList;
