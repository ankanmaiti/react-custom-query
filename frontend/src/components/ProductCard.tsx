interface Product {
  id?: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: Product) {
  return (
    <>
      <div className="h-fit overflow-hidden rounded bg-slate-200 shadow">
        <div className="w-full">
          <img
            className="object-contain object-center"
            src={image}
            alt={name}
          />
        </div>

        <div className="flex items-center justify-between px-2 py-1">
          <h3 className="text-lg font-semibold text-slate-700">{name}</h3>
          <p className="font-semibold text-orange-400">
            $<span className="text-green-500">{price}</span>
          </p>
        </div>
      </div>
    </>
  );
}
