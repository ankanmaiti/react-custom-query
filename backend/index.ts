import express from "express";
import cors from "cors";

import type { Request, Response } from "express";

const app = express();

app.use(cors());

app.get("/api/products", (req: Request, res: Response) => {
  const products = [
    {
      id: crypto.randomUUID(),
      name: "Headphone",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: crypto.randomUUID(),
      name: "Lipstick",
      price: 15,
      image:
        "https://plus.unsplash.com/premium_photo-1677541367608-7283ec1b3a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: crypto.randomUUID(),
      name: "Hand Watch",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: crypto.randomUUID(),
      name: "Shoe",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: crypto.randomUUID(),
      name: "Plant",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  if (req.query.q) {
    const filterProduct = products.filter((product) =>
      product.name.toLowerCase().includes(String(req.query.q).toLowerCase())
    );
    setTimeout(() => {
      res.send(filterProduct);
    }, 500);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
