import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <button className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur text-black py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase text-xs tracking-widest">
          Add to Cart
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500">${product.price}.00</p>
      </div>
    </div>
  );
}

