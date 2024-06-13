import { useState } from 'react'
import { ShoppingListType, ShoppingItemType } from '../../../types'
import ItemForm from './ItemForm'

type ShoppingListProps = {
  title: string;
  shoppingList: ShoppingListType;
}

const LOCALE = 'en-GB'
const CURRENCY_CODE = 'GBP'

export default async function ShoppingList({ title, shoppingList }: ShoppingListProps) {

  const currency = Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY_CODE,
  });

  async function addItem(item: ShoppingItemType) {
    'use server'
    console.log('ADDED ITEM', item)
    return null
  }

  return (
    <>
      <ItemForm items={shoppingList} addItem={addItem} />

      <div className="sm:w-1/2 p-4 mt-8 mx-auto sm:border">
        <h1 role="heading" className="text-xl mb-4">{title}</h1>
        <ul>
          {shoppingList.map(({ id, title, quantity, price }) => (
            <li className="flex justify-between" key={id}>
              <span><input type="checkbox" className="mr-2" />{title} x{quantity}</span>
              <span>{currency.format(price)}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}