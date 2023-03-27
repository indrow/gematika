"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import "@/styles/nav.scss";

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment ? segment : ""}`;

  return (
    <Link
      className={"nav__link" + (active ? " border-b-4 border-cyan-500" : "")}
      href={href}
    >
      {children}
    </Link>
  );
}
