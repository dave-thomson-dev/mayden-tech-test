import ShoppingList from '../features/shopping-list/components/ShoppingList'
import { ShoppingListType } from '../types'

/**
 * ShoppingList Page
 *
 * This page renders a shopping list that allows users to add, toggle, and delete items.
 */

const EXAMPLE_SHOPPING_LIST: ShoppingListType = [
  { id: 1, title: 'Apples', quantity: 2, price: 0.28, isComplete: false },
  { id: 2, title: 'Oranges', quantity: 6, price: 0.30, isComplete: false },
]

export default function Home() {
  return (
    <ShoppingList title="Healthy Eating" shoppingList={EXAMPLE_SHOPPING_LIST} />
  )
}