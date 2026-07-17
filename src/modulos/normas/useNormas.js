import { useState } from "react";
import { NORMAS_DOCUMENTS } from "./normas.data.js";

export function useNormas() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("todas");
  const [selectedId, setSelectedId] = useState(NORMAS_DOCUMENTS[0]?.id || null);

  const search = searchText.trim().toLowerCase();

  const filteredDocs = NORMAS_DOCUMENTS.filter((doc) => {
    const matchesCategory =
      activeCategory === "todas" || doc.type.toLowerCase() === activeCategory;
    const matchesSearch =
      !search ||
      doc.code.toLowerCase().includes(search) ||
      doc.title.toLowerCase().includes(search) ||
      doc.summary.toLowerCase().includes(search) ||
      doc.source.toLowerCase().includes(search) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(search));

    return matchesCategory && matchesSearch;
  });

  const selectedDoc =
    filteredDocs.find((doc) => doc.id === selectedId) || filteredDocs[0] || NORMAS_DOCUMENTS[0];

  const visibleDocs = filteredDocs.length > 0 ? filteredDocs : NORMAS_DOCUMENTS;
  const totalDocs = NORMAS_DOCUMENTS.length;
  const totalCats = new Set(NORMAS_DOCUMENTS.map((doc) => doc.type)).size;

  return {
    searchText,
    setSearchText,
    activeCategory,
    setActiveCategory,
    selectedId,
    setSelectedId,
    selectedDoc,
    visibleDocs,
    totalDocs,
    totalCats,
  };
}
