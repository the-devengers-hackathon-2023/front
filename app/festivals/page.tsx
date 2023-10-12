"use client";

import { useState, useEffect } from "react";
import FestivalsList from "../components/FestivalsList";
import PaginationWithIcons from "../components/Pagination";

export default function Festivals() {
  const [festivals, setFestivals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageParam: number) => {
    const res = await fetch(
      `https://localhost:8000/api/festivals?page=` + pageParam,
      { mode: "cors" }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    return res.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(currentPage);
      setFestivals(data);
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [currentPage]);

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
