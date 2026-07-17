import { useState } from "react";
import { HELP_CATEGORIES, HELP_FAQS } from "./ayuda.data.js";

export function useAyuda() {
  const [searchText, setSearchText] = useState("");
  const [openFaq, setOpenFaq] = useState(HELP_FAQS[0]?.id || null);

  const search = searchText.trim().toLowerCase();

  const visibleCategories = HELP_CATEGORIES.filter((item) => {
    if (!search) return true;
    return (
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });

  const visibleFaqs = HELP_FAQS.filter((item) => {
    if (!search) return true;
    return (
      item.question.toLowerCase().includes(search) ||
      item.answer.toLowerCase().includes(search)
    );
  });

  const activeFaqId =
    openFaq === null
      ? null
      : visibleFaqs.find((item) => item.id === openFaq)?.id || visibleFaqs[0]?.id || null;

  const handleQuickAction = (query) => {
    setSearchText(query);
    setOpenFaq(HELP_FAQS[0]?.id || null);
  };

  return {
    searchText,
    setSearchText,
    openFaq,
    setOpenFaq,
    visibleCategories,
    visibleFaqs,
    activeFaqId,
    handleQuickAction,
  };
}
