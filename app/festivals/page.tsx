import FestivalsList from "../components/FestivalsList";
import PaginationWithIcons from "../components/Pagination";

async function getData(pageParam: number) {
  const res = await fetch(
    `${process.env.API_URL}/festivals?page=` + pageParam,
    { mode: "cors" }
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}

export default async function Festivals() {
  const festivals = await getData(1);

  // À enlever -> simule le chargement
  // async function wait(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // await wait(2000);

  return (
    <>
      <FestivalsList festivals={festivals} />
      <PaginationWithIcons />
    </>
  );
}
