"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import NavBrand from "./NavBrand";

function Navbar() {
  const pathname = usePathname();

  if (pathname?.includes("admin")) {
    return <></>;
  } else {
    return (
      <nav className="main__nav">
        <div className="nav__wrapper max-w-screen-xl">
          <NavBrand />
          <div className="nav__link__wrapper">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/article">Artikel</NavLink>
            <NavLink href="/about">Tentang</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
