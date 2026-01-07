
export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface BasketItem extends Product {
  quantity: number;
}
