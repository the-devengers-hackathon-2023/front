"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className="fixed w-full overflow-hidden z-20">
      <Navbar.Brand as={Link} href="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Adopte ton festival !
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
          <Button href="/login">Login</Button>
      </div>
    </Navbar>
  );
}
