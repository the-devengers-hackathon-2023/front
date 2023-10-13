"use client";

import { Card } from "flowbite-react";
import { FestivalObject } from "@/types/FestivalObject";
import Link from "next/link";

export default function CardWithActionButton({
  festival,
}: {
  festival: FestivalObject;
}) {
  return (
    <Link href={`/festivals/${festival.id}`}>
      <Card
        className="max-w-sm h-64 hover:border hover:border-teal-500"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {festival.nom_du_festival}
        </h5>
        <div className="flex">
          <span className="dark:text-white mr-4">Catégorie :</span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {festival.discipline_dominante}
          </p>
        </div>
        <div className="flex">
          <span className="dark:text-white mr-4">Région :</span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {festival.region_principale_de_deroulement}
          </p>
        </div>
        <div className="flex">
          <span className="dark:text-white mr-4">Commune :</span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {festival.commune_principale_de_deroulement}
          </p>
        </div>
      </Card>
    </Link>
  );
}
