"use client";

import { Card } from "flowbite-react";

export default function DefaultCard({
  title,
  description,
  author,
  data,
  linkUrl,
}: {
  title: string;
  description: string;
  author: string;
  data: any;
  linkUrl: string;
}) {
  return (
    <Card className="max-w-sm" href={linkUrl}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{description}</p>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{author}</p>
      </p>
    </Card>
  );
}
