export async function getPlanets() {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getBooks() {
  try {
    const response = await fetch("https://localhost:8000/api/books");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
