
type ShoppingItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  order: number;
}

type ShoppingList = ShoppingItem[]

const LOCALE = 'en-GB'
const CURRENCY_CODE = 'GBP'

export default function Home() {

  const shoppingList: ShoppingList = [
    { id: 1, title: 'Apple', quantity: 2, price: 0.88, order: 1},
    { id: 2, title: 'Oranges', quantity: 3, price: 0.90, order: 2},
  ]

  const currency = Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY_CODE,
  });

  return (
    <div className="w-1/2 p-4 mt-8 mx-auto border">
      <h1 role="heading" className="text-xl mb-4">Shopping List</h1>
      <ul>
        { shoppingList.map(({id, title, quantity, price}) => (
          <li className="flex justify-between" key={id}>
            <span><input type="checkbox" className="mr-2" />{title} x{quantity}</span>
            <span>{currency.format(price)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}