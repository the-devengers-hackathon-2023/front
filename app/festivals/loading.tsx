'use client';

import { Spinner } from 'flowbite-react';

export default function Loading() {
  return (
    <Spinner className='fixed flex justify-center items-center h-full' size={"xl"} aria-label="Default status example" />
  )
}


