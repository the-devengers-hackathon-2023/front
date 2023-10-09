import DefaultAccordion from "./DefaultAccordion";
// import getPlanets from "./services/services";

async function getPlanets() {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default function Home() {
  const planets: any = getPlanets();
  console.log(planets);

  return (
    <DefaultAccordion
      name={"test"}
      climate={"hello world"}
      population={"test"}
    />
  );
}
