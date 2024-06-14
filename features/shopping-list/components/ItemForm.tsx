'use client'

import { useState } from 'react'
import { ShoppingListType, NewShoppingItemType } from '../../../types'

type ItemFormProps = {
  addItem: (item: NewShoppingItemType) => void;
  items: ShoppingListType;
}

export default function ItemForm({ items, addItem }: ItemFormProps) {

  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [formError, setFormError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!item || !quantity || !price) {
      setFormError('Please fill out all fields.');
      return;
    }

    const existingItem = items.find((i) => i.title === item);
    if (existingItem) {
      setFormError('Item is already on shopping list');
      return;
    }

    addItem({title: item, quantity: parseFloat(quantity), price: parseFloat(price)})

    setItem('')
    setQuantity('')
    setPrice('')
    setFormError('')
  }

  return (
    <div className="sm:w-1/2 p-4 mt-8 mx-auto sm:border">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input type="text" name="title" placeholder="Item" value={item} onChange={(e) => setItem(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2" />
          <input type="number" name="quantity" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2" />
          <input type="number" name="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Item
          </button>
          {formError && <p className="text-red-600">{formError}</p>}
        </div>
      </form>
    </div>
  )
}