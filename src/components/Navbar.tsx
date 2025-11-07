const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
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
  return <></>;
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