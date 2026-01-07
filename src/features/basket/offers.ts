export const cheeseOffer = (qty: number, price: number) =>
  Math.floor(qty / 2) * price

export const soupBreadOffer = (
  soupQty: number,
  breadQty: number,
  breadPrice: number
) => Math.min(soupQty, breadQty) * breadPrice * 0.5

export const butterOffer = (qty: number, price: number) =>
  qty * (price / 3)
