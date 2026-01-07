import { cheeseOffer, soupBreadOffer, butterOffer } from './offers'
import { BasketItem } from './basketSlice'

export const calculateBill = (items: BasketItem[]) => {
  let subtotal = 0
  let savings = 0

  const map = Object.fromEntries(items.map(i => [i.id, i]))

  items.forEach(i => {
    subtotal += i.price * i.quantity
  })

  if (map.cheese)
    savings += cheeseOffer(map.cheese.quantity, map.cheese.price)

  if (map.soup && map.bread)
    savings += soupBreadOffer(
      map.soup.quantity,
      map.bread.quantity,
      map.bread.price
    )

  if (map.butter)
    savings += butterOffer(map.butter.quantity, map.butter.price)

  return {
    subtotal,
    savings,
    total: subtotal - savings,
  }
}


