export default async function getPlanets() {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
