import clsx from "clsx";

const Nav = () => {
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 z-50",
        "w-full h-[10vh] min-h-[67px] p-4"
      )}
    >
      <ul
        className={clsx(
          "h-full",
          "bg-black/90 rounded-3xl shadow-xl",
          "flex gap-8 justify-evenly items-center",
          "text-lg tracking-wide",
          "lg:text-xl"
        )}
      >
        <li
          className={clsx(
            "text-white text-opacity-70",
            "transition-all duration-300",
            "hover:text-opacity-100"
          )}
        >
          <a href={"#project"}>Project</a>
        </li>
        <li
          className={clsx(
            "text-white text-opacity-70",
            "transition-all duration-300",
            "hover:text-opacity-100"
          )}
        >
          <a href={"#aboutme"}>About me</a>
        </li>
        <li
          className={clsx(
            "text-white text-opacity-70",
            "transition-all duration-300",
            "hover:text-opacity-100"
          )}
        >
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
