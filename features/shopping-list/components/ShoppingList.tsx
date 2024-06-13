'use client'
import { useReducer } from 'react'
import { ShoppingListType, NewShoppingItemType } from '../../../types'
import ItemForm from './ItemForm'
import CurrencyFormat from '../../ui/CurrencyFormat'

type ShoppingListProps = {
  title: string;
  shoppingList: ShoppingListType;
}

export default function ShoppingList({ title, shoppingList }: ShoppingListProps) {

  const [state, dispatch] = useReducer(shoppingListReducer, shoppingList)

  function handleAddItem(item: NewShoppingItemType) {
    dispatch({
      type: 'add_item',
      item
    });
  }

  return (
    <>
      <ItemForm items={shoppingList} addItem={handleAddItem} />

      {/* Shopping List */}
      <div className="sm:w-1/2 p-4 mt-8 mx-auto sm:border">
        <h1 role="heading" className="text-xl mb-4">{title}</h1>
        <ul>
          {state.map(({ id, title, quantity, price }) => (
            <li className="flex justify-between" key={id}>
              <span><input type="checkbox" className="mr-2" />{title} x{quantity}</span>
              <CurrencyFormat value={price} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function shoppingListReducer(state: ShoppingListType, action: any) {
  switch (action.type) {
    case 'add_item': {
      const nextId = state.length + 1
      const newItem = {
        id: nextId,
        ...action.item,
      }
      return [
        ...state,
        newItem
      ]
    }
  }
  throw Error('Unknown action: ' + action.type);
}