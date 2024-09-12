"use client";
import imgLogo from "../public/img/solidarmobil_logo.svg";

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 text-base-content z-10 fixed top-0 w-full">
      <div class="flex flex-shrink-0 items-center"></div>
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-heading">
          <Image
            className="size-64 h-8 w-auto"
            priority
            src={imgLogo}
            alt="SolidarMobil-Logo"
          />
          <div className="hidden lg:flex">SolidarMobil e.V.</div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavbarItems className="menu menu-horizontal px-1" />
      </div>

      <div className="navbar-end">
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => document.getElementById("modal_menu").showModal()}
        >
          <FaBars />
        </button>
      </div>

      <dialog id="modal_menu" className="modal">
        <div className="modal-box min-w-full min-h-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <NavbarItems className="menu menu-lg bg-neutral text-neutral-content z-[1] w-full h-full items-center shadow pt-5" />
        </div>
      </dialog>
    </div>
  );
}
