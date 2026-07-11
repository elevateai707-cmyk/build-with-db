export interface MerchItem {
  id: string;
  name: string;
  price: number;
  tag?: string;
  image?: string;
}

export const merchItems: MerchItem[] = [
  {
    id: "snapback",
    name: "DB Snapback",
    price: 39.99,
    tag: "Classic",
    image: "/images/merch/snapback.png",
  },
  {
    id: "hoodie",
    name: "Signature Hoodie",
    price: 89.99,
    tag: "Best Seller",
    image: "/images/merch/hoodie.png",
  },
  {
    id: "tee",
    name: "Performance Tee",
    price: 44.99,
    image: "/images/merch/tee.png",
  },
  {
    id: "mug",
    name: "DB Coffee Mug",
    price: 24.99,
    tag: "Essential",
    image: "/images/merch/mug.png",
  },
  {
    id: "crew",
    name: "Premium Crew",
    price: 79.99,
    tag: "New",
    image: "/images/merch/crew.png",
  },
  {
    id: "notebook",
    name: "Builder Notebook",
    price: 19.99,
    image: "/images/merch/notebook.png",
  },
  {
    id: "stickers",
    name: "Laptop Stickers",
    price: 9.99,
    tag: "3-Pack",
    image: "/images/merch/stickers.png",
  },
];
