import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const url = `http://localhost:3000/products?q=${query}`;
  const { data: items, loading, error } = useFetch(url);

  // Filtrar os itens que contêm exatamente a query no nome
  const filteredItems =  items ? items.filter(item => item.name.toLowerCase().includes(query.toLowerCase())) : [];

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
