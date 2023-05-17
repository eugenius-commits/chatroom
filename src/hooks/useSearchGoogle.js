import { useState, useEffect } from "react";

const useSearchGoogle = (searchTerm) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&q=${encodeURIComponent(
            searchTerm
          )}`
        );
        const data = await response.json();
        setResults(data.items || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return results;
};

export default useSearchGoogle;
