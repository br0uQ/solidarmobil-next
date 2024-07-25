import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavbarItems from "./NavbarItems";

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-base-content z-10 fixed top-0 w-full">
      <div className="navbar-start">
        <details className="dropdown">
          <summary className="btn btn-ghost m-1 lg:hidden">
            <FaBars />
          </summary>
          <NavbarItems className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow" />
        </details>
        <a className="btn btn-ghost text-xl">SolidarMobil e.V.</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavbarItems className="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end" />
    </div>
  );
}
