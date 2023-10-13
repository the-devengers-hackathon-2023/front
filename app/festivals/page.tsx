"use client";

import { useState, useEffect } from "react";
import FestivalsList from "../components/FestivalsList";
import PaginationWithIcons from "../components/Pagination";

export default function Festivals({searchResults}) {
  const [festivals, setFestivals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageParam: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/festivals?page=` + pageParam,
      { mode: "cors" }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    return res.json();
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      // Use search results if they are available
      setFestivals(searchResults);
    } else {
      // Fetch festivals if no search results are available
      const fetchData = async () => {
        const data = await getData(currentPage);
        setFestivals(data);
        window.scrollTo(0, 0);
      };

      fetchData();
    }
  }, [currentPage, searchResults]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <FestivalsList festivals={festivals} />
      <PaginationWithIcons onPageChange={handlePageChange} />
    </>
  );
}
