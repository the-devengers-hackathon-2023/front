"use client";

import { Accordion } from "flowbite-react";

export default function DefaultAccordion({
  name,
  climate,
  population,
}: {
  name: string;
  climate: string;
  population: string;
}) {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>{name}</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{climate}</p>
          <p className="text-gray-500 dark:text-gray-400">{population}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
