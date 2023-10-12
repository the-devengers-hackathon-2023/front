'use client'

import { FestivalObject } from "@/types/FestivalObject";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

export default function SimpleCard({festival} : {festival: FestivalObject}) {
    return (
        <Card className="h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{festival.nom_du_festival}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {festival.region_principale_de_deroulement} - {festival.commune_principale_de_deroulement}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Année de création: {festival.annee_de_creation_du_festival}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Site du festival: &nbsp;
                <Link href={festival.site_internet_du_festival} className="underline dark:hover:text-white" target="_blank" rel="noreferrer">
                    {festival.site_internet_du_festival}
                </Link>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Contact: <span className="underline">{festival.adresse_e_mail}</span>
            </p>
            <Button>
                <p>Une erreur ?</p>
            </Button>
        </Card>
    )
}