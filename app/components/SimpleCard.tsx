'use client'

import { FestivalObject } from "@/types/FestivalObject";
import { Button, Card } from "flowbite-react";

export default function SimpleCard({festival} : {festival: FestivalObject}) {
    return (
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{festival.nom_du_festival}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Region - City
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Année de création:
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Site du festival:
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Contact:
            </p>
            <Button>
                <p>Une erreur ?</p>
            </Button>
        </Card>
    )
}