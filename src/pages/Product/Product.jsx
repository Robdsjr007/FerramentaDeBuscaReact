import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Product.css";


const Product = () => {
  // 4 - Rota dinâmica
const { id } = useParams();
  
  // 5 - Carregamento dado individual
const url = `http://localhost:3000/products/${id}`;
const {data: product, loading, error} = useFetch(url)
console.log(product)

    return (
    <>
     {error && <p>Ocorreu um erro!</p>}
     {loading && !error && <p>Carregando...</p>}
     {product && (
        <div className="card">
            <p className="id">ID: {id}</p>
            <h1 className="productName">{product.name}</h1>
            <p className="productPrice">R$ {product.price}</p>
            {/* 6 - Nested Routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
     )}
    </>
  );
};

export default Product