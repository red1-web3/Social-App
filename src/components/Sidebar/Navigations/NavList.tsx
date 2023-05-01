import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ComponentProps, forwardRef, Ref } from "react";
import { NavItem } from "src/models/Navbar";

const NavList = forwardRef(
  (
    {
      data: { label, logo, path, newListing },
      ...rest
    }: { data: NavItem } & ComponentProps<"button">,
    ref: Ref<HTMLButtonElement>
  ) => {
    const router = useRouter();
    const active = router.pathname === path;

    return (
      <button
        {...rest}
        className={classNames(
          "px-4 py-3 rounded-md duration-[600ms] relative block w-full hover:bg-dark-400",
          active ? "text-light-100" : "dark:text-light-700",
          newListing && "flex justify-between items-center"
        )}
      >
        <div className="flex items-center gap-x-5 w-full z-10 relative">
          <span className="w-5">{logo}</span>
          <span className="font-semibold">{label}</span>
        </div>

        {newListing && (
          <div className="text-xs shrink-0 text-white rounded-3xl dark:bg-dark-400 px-3 py-1">
            {newListing} new listing
          </div>
        )}

        {active && (
          <motion.div
            layoutId="activeNavigation"
            className="absolute inset-0 bg-primary rounded-md"
            transition={{ type: "spring", duration: 0.6 }}
          />
        )}
      </button>
    );
  }
);

export default NavList;
