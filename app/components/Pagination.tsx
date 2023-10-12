"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function PaginationWithIcons({ onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page); // Call the function passed as a prop
  };

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={handlePageChange}
      showIcons
      totalPages={100}
    />
  );
}
