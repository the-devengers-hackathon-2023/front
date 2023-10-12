import CardWithActionButton from "./components/Card";
import FilterButton from "./components/FilterButton";
import Searchbar from "./components/Searchbar";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/home`);

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  
  return (
    <>
      <div className="fixed flex flex-col items-center top-[61.6px] w-full bg-white dark:bg-black z-20 pt-4">
        <Searchbar />
        <div className="w-3/4 pb-4 border-b dark:border-white border-gray-900">
          <FilterButton text={"Bonsoir"} />
          <FilterButton text={"Merci"} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[167px]">
        {
          data.festivals.map((f: void) => {
            return(
              <>
                <CardWithActionButton title={f.festival.nom_du_festival}/>
              </>
            )
          })
        }
      </div>
    </>
  )
}
