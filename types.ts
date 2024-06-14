export type ShoppingItemType = {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

export type NewShoppingItemType = Omit<ShoppingItemType, "id">

export type ShoppingListType = ShoppingItemType[]

