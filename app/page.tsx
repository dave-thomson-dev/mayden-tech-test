import ShoppingList from '../features/shopping-list/components/ShoppingList'
import { ShoppingListType } from '../types'

export default function Home() {

  const shoppingList: ShoppingListType = [
    { id: 1, title: 'Apple', quantity: 2, price: 0.88, order: 1},
    { id: 2, title: 'Oranges', quantity: 3, price: 0.90, order: 2},
  ]

  return (
    <ShoppingList title="Healthy Eating" shoppingList={shoppingList} />
  )
}