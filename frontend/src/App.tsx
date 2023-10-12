import Container from "./components/Container";
import ProductCard from "./components/ProductCard.tsx";
import useFetch from "./Hooks/useFetch.ts";

import { useState } from "react";

interface Products {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function App() {
  const [search, setSearch] = useState("");
  const [products, loading] = useFetch<Products[]>("/api/products?q=" + search);

  return (
    <Container>
      <div className="text-center">
        <h1 className="text-4xl pt-2">Chai aur API in React</h1>
        <div className="py-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-black rounded p-1 my-2"
          />
        </div>
        {/* {loading && <p>Loading...</p>} */}
        <section className="w-3/4 mx-auto">
          <ul className="columns-2 sm:columns-3 gap-2 space-y-2">
            {products?.map((product) => (
              <li key={product.id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </li>
            ))}
          </ul>
        </section>

        <div></div>
      </div>
    </Container>
  );
}
