import { Input } from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <Input
      placeholder="Search matches..."
      value={query}
      onChange={handleSearch}
      width="300px"
      m={4}
    />
  );
};
export default SearchBar;
