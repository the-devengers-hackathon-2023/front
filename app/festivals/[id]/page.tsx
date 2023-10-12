import { useParams } from "next/navigation";
import { Button, Card } from "flowbite-react";

async function getFestival(id: any) {
  const res = await fetch(`${process.env.API_URL}/festivals/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Festivals() {
  const params = useParams();
  const festival = await getFestival(params.id);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      <div className="lg:w-2/5">
        <Card className="">
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
      </div>

      <div className="flex flex-col justify-end border lg:w-3/5 gap-6">
        <div className="flex justify-center items-center lg:p-64 bg-white border rounded-lg shadow-lg">
          Carte
        </div>
      </div>
    </div>
  );
}
