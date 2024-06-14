export type ShoppingItemType = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  isComplete: boolean;
}

export type NewShoppingItemType = Omit<ShoppingItemType, "id">

export type ShoppingListType = ShoppingItemType[]

