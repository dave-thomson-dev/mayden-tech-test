// TODO Add to Context Config Settings
const LOCALE = 'en-GB'
const CURRENCY_CODE = 'GBP'

type CurrencyFormatProps = {
  value: number
}

export default function CurrencyFormat({value}: CurrencyFormatProps) {
  
  const currency = Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY_CODE,
  })

  return (
    <span>{currency.format(value)}</span>
  )
}