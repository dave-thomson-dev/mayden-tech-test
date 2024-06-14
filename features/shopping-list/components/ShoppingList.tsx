'use client'
import { useReducer } from 'react'
import { ShoppingListType, NewShoppingItemType, ShoppingItemType } from '../../../types'
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

  function handleToggleItem(id: string, isComplete: boolean) {
    dispatch({
      type: 'toggle_item',
      id,
      isComplete
    });
  }

  function handleDeleteItem(item: ShoppingItemType) {
    dispatch({
      type: 'delete_item',
      item
    });
  }

  return (
    <>
      <ItemForm items={shoppingList} addItem={handleAddItem} />

      {/* Shopping List */}
      <div className="sm:w-1/2 p-4 mt-8 mx-auto sm:border sm:rounded-md">
        <h1 role="heading" className="text-xl mb-4">{title}</h1>
        <ul>
          {state.length === 0 ? (<li>Please add an item to your shopping list</li>) : (
            state.map((item) => (
              <li className="flex justify-between" key={item.id}>
                <span className={item.isComplete ? 'line-through' : ''}>
                  <input type="checkbox" className="mr-2" value={item.isComplete} onChange={(e) => {
                    handleToggleItem(item.id, e.target.checked)
                  }} />
                    {item.title} x{item.quantity}
                </span>
                <span>
                  <CurrencyFormat value={item.price * item.quantity} />
                  <a onClick={() => handleDeleteItem(item)} className="ml-2 underline text-blue-600 hover:text-blue-800">delete</a>
                </span>
              </li>
            )
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
    case 'toggle_item': {
      return state.map((item) =>
        item.id === action.id
          ? { ...item, isComplete: action.isComplete }
          : item,
      )
    }
    case 'delete_item': {
      return state.filter(item => item.id !== action.item.id)
    }
  }
  throw Error('Unknown action: ' + action.type);
}