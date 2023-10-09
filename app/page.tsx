import Link from "next/link";
import DefaultAccordion from "./DefaultAccordion";
import { getPlanets, getBooks } from "./services/services";

export default async function Home() {
  // const planets = await getPlanets();
  // console.log(planets);

  const books = await getBooks();
  console.log(books);

  return (
    <>
      {/* {planets.results.map((e: any, i: number) => {
        return (
          <Link href={`planets/${i}`}>
            <DefaultAccordion
              key={i}
              name={e.name}
              climate={e.climate}
              population={e.population}
            />
          </Link>
        );
      })} */}
      {books.map((e: any, i: number) => {
        return (
          <Link href={`books/${i}`}>
            <DefaultAccordion
              key={i}
              name={e.title}
              climate={e.description}
              population={e.author}
            />
          </Link>
        );
      })}
    </>
  );
}
