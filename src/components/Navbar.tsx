import { Bars3Icon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import useRouteHash from "../hooks/UseRouteHash";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog/1" },
];

export default function NavBar() {
  return (
    <header>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItemsWithHome = [
    { name: "Home", href: "/" }
  ].concat(navItems);
  const hash = useRouteHash();
  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <header className={`bg-white/40 lg:hidden fixed top-0 z-10 border-1 border-warm-grey-700 ${!isOpen ? '-translate-y-100' : ''} transition duration-200 ease-in-out w-[100vw]`}>
      <div className="flex flex-col h-100 bg-white">
        <div className="flex justify-center p-5">
          <a href="/" className={`font-mono text-3xl`}>
            <img
              src="/logo.svg"
              alt="Joel Johnston"
              width={207}
              height={58.65}
            />
          </a>
        </div>
        <nav className="flex grow">
          <ul className="text-3xl grow flex flex-col justify-between">
            {navItemsWithHome.map(item => (
              <li key={item.name} className="text-center">
                <a href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center my-6">
          <a
            href="/contact"
            className="bg-fresh-lime-500 hover:bg-aqua-glow-400 text-white text-xl px-3 py-2 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex-row justify-items-end">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="w-10 mx-2">
            <Bars3Icon />
          </button>
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <div className="justify-center fixed top-0 drop-shadow-md	bg-black/50 hidden lg:flex w-full z-20 backdrop-blur-sm text-white">
      <div className="flex max-w-6xl grow h-20 items-center px-3">
        <a href="/" className={`font-mono text-3xl`}>
          <img
            src="/logo.svg"
            alt="Joel Johnston"
            width={207}
            height={58.65}
          />
        </a>
        <nav className="grow flex justify-center">
          <ul className="flex gap-8 text-2xl">
            {navItems.map(item => (
              <li key={item.name}>
                <a href={item.href} className="text-white font-serif">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a
            href="/contact"
            className="bg-fresh-lime-500 hover:bg-aqua-glow-400 text-white text-xl px-3 py-2 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}