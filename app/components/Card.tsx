"use client";

import { Button, Card } from "flowbite-react";

export default function CardWithActionButton({ title }: { title: string }) {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button>
        <p>Read more</p>
      </Button>
    </Card>
  );
}

export function FestivalCard({
  title,
  region,
  city,
  category,
}: {
  title: string;
  region: string;
  city: string;
  category: string;
}) {
  return (
    <Card className="">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{region}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">{city}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">{category}</p>
      <Button>
        <p>Une erreur ?</p>
      </Button>
    </Card>
  );
}
