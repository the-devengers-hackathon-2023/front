'use client';

import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hackaton 2023
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


