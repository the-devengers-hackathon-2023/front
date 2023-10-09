"use client";

import { Button, Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className="border-b border-gray-200">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Link1</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
