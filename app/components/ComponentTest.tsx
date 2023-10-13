'use client'
import FilterButton from "../components/FilterButton";
import Searchbar from "../components/Searchbar";
import Festivals from "../festivals/page";
import Loading from "../festivals/loading";
import { Suspense, useState } from "react";


export default function ComponentTest() {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <>
            <div className="fixed flex flex-col items-center top-[61.6px] w-full bg-white dark:bg-black z-20 pt-4">
                <Searchbar setSearchResults={setSearchResults}/>
            <div className="w-3/4 pb-4 border-b dark:border-white border-gray-900">
                <FilterButton text={"Bonsoir"} />
                <FilterButton text={"Merci"} />
            </div>
            </div>
            <Suspense fallback={<Loading />}>
                <Festivals searchResults={searchResults}/>
            </Suspense>
        </>
    )
}