'use client';

import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
      className='fixed w-full overflow-hidden z-20'
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
      </div>
    </Navbar>
  )
}


