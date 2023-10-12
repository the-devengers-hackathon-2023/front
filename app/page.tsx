import FilterButton from "./components/FilterButton";
import PaginationWithIcons from "./components/Pagination";
import Searchbar from "./components/Searchbar";
import Festivals from "./festivals/page";
import Loading from "./festivals/loading";
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <div className="fixed flex flex-col items-center top-[61.6px] w-full bg-white dark:bg-black z-20 pt-4">
        <Searchbar />
        <div className="w-3/4 pb-4 border-b dark:border-white border-gray-900">
          <FilterButton text={"Bonsoir"} />
          <FilterButton text={"Merci"} />
        </div>
      </div>
      <Suspense fallback={<Loading/>}>
        <Festivals/>
      </Suspense>
      <PaginationWithIcons />
    </>
  )
}
