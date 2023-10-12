import FestivalsList from "../components/FestivalsList";
import PaginationWithIcons from "../components/Pagination";

async function getData(pageParam: number) {
    const res = await fetch(`${process.env.API_URL}/festivals?page=` + pageParam);
  
    if (!res.ok) {
      throw new Error("Error fetching data");
    }
  
    return res.json();
  }


export default async function Festivals() {
    const festivals = await getData(1);

    return (
      <>
        <FestivalsList festivals={festivals}/>
        {/* TODO finish pagination */}
        {/* <PaginationWithIcons/> */}
      </>
    )
}