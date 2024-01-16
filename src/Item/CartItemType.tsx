export type CartItemType = {
    [x: string]: unknown
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    // amount: number;
    rating: {
      rate: number,
      count: number
    }
  } 