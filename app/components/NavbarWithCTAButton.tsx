"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className="fixed w-full overflow-hidden z-20">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <Link href="/">Adopte ton festival !</Link>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </Navbar>
  );
}
