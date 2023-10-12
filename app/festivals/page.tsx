import { FestivalCard } from "../components/Card";

export default function Festivals() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      <div className="lg:w-1/3">
        <FestivalCard
          title={"Title"}
          region={"Région"}
          city={"Ville"}
          category={"Musique"}
        />
      </div>

      <div className="flex flex-col justify-end border lg:w-2/3 gap-6">
        <div className="flex justify-center items-center lg:p-64 bg-white border rounded-lg shadow-lg">
          Carte
        </div>
        <div className="flex justify-center items-center lg:p-64 bg-white border rounded-lg shadow-lg">
          Photos
        </div>
        <div className="flex justify-center items-center lg:p-64 bg-white border rounded-lg shadow-lg">
          More info
        </div>
      </div>
    </div>
  );
}
