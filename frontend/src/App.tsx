import Container from "./components/Container";
import useFetch from "./Hooks/useFetch.ts";

import { useState } from "react";

interface Products {
  id: string;
  name: string;
  price: string;
  image: URL;
}

export default function App() {
  const [search, setSearch] = useState("");
  const [products, loading] = useFetch<Products[]>("/api/products?q=" + search);

  return (
    <Container>
      <div className="text-center">
        <h1 className="text-4xl">Chai aur API in React</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black rounded p-1 my-2"
        />
        {loading && <p>Loading...</p>}
        <p className="text-slate-400">
          Number of Products are: {products?.length}
        </p>

        <div></div>
      </div>
    </Container>
  );
}
