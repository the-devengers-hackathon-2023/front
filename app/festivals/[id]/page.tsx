import Mapbox from "@/app/components/Mapbox";
import SimpleCard from "@/app/components/SimpleCard";

async function getFestival(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/festivals/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Festivals({
  params,
}: {
  params: { id: string };
}) {
  const festival = await getFestival(params.id);
  const lat = parseFloat(festival.geocodage_xy.split(",")[0]);
  const lon = parseFloat(festival.geocodage_xy.split(",")[1]);

  return (
    <div className="flex flex-col lg:flex-row lg:mt-24 w-full gap-6">
      <div className="lg:w-2/5">
        <SimpleCard festival={festival} />
      </div>

      <div className="flex flex-col justify-end border rounded-lg lg:w-3/5 gap-6">
        <div className="w-full flex justify-center items-center bg-white border rounded-lg shadow-lg">
          <Mapbox lon={lon} lat={lat} />
        </div>
      </div>
    </div>
  );
}
