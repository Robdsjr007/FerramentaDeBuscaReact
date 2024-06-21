import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); // Define um valor inicial para query

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query} // Adiciona value ao input
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
