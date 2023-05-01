import Input from "@components/Inputs/Input";
import { useRouter } from "next/router";
import { navigationItems } from "src/constant/Navbar";
import NavList from "./NavList";

function Navigations() {
  const router = useRouter();

  function clickNavList(i: number, path: string) {
    router.push(path);
  }
  return (
    <nav className="h-full w-full">
      <div className="mb-8">
        <Input />
      </div>
      <div className="relative space-y-1">
        {navigationItems.map((data, i) => (
          <NavList
            key={i}
            data={data}
            onClick={() => clickNavList(i, data.path)}
          />
        ))}

        {/* <div className="absolute left-0 w-full dark:bg-dark-400 _tranistionFunc rounded-md z-[1]"></div> */}
      </div>
    </nav>
  );
}

export default Navigations;
