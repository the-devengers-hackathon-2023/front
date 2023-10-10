import Link from "next/link";
import DefaultAccordion from "./DefaultAccordion";
import { getPlanets, getBooks } from "./services/services";
import DefaultCard from "./DefaultCard";

export default async function Home() {
  // const planets = await getPlanets();
  // console.log(planets);

  const books = await getBooks();
  console.log(books);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
        {books.map((e: any, i: number) => {
          return (
            <DefaultCard
              key={i}
              title={e.title}
              description={e.description}
              author={e.author.firstname + " " + e.author.lastname}
              data={e}
              linkUrl={`planets/${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}
