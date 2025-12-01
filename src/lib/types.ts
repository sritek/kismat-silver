export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CarouselImage {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

export interface ChatMessage {
  role: "user" | "system";
  text: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Collection {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  priceStart: number;
  badge: string;
  category: string;
  materials: string[];
}

