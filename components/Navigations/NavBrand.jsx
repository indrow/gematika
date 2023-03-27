import "@/styles/nav.scss";

import Link from "next/link";

export default function NavBrand() {
  return (
    <Link className="flex__center" href={"/"}>
      <span className="nav__brand">Gematika</span>
    </Link>
  );
}
