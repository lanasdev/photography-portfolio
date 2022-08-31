import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex space-x-4 py-2 sm:justify-center">
      {[
        ["Home", "/"],
        ["About", "/about"],
      ].map(([title, url]) => (
        <Link href={url} key={title}>
          <a
            className={cn(
              router.asPath == url ? "underline underline-offset-2" : "",
              "rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            {title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
