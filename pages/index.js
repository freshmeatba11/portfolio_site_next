import clsx from "clsx";
import Head from "next/head";
import Nav from "../components/Nav";
import SelfInfo from "../components/Self-info";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Chen's web portfolio</title>
        <meta name="description" content="Jason Chen's web portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx(
          "App w-screen h-screen overflow-scroll scroll-smooth snap-mandatory snap-y",
          "bg-main bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-800/20",
          "px-[5vw]"
        )}
      >
        <Nav />
        <SelfInfo />
        <Divider />
      </div>
    </>
  );
}
