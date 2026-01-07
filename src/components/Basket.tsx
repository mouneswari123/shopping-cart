import { useSelector } from 'react-redux'
import { calculateBill } from '../features/basket/selectors'
import '../styles/basket.css'
import BasketItem from './BasketItem'



export default function Basket() {
  const items = useSelector((state: any) => state.basket)
  const { subtotal, savings, total } = calculateBill(items)

  return (
    <div className="basket">
      <h2>Basket</h2>

      {items.map((i: any) => (
        <div key={i.id} className="basket-item">
          {i.name} x {i.quantity} = £{(i.price * i.quantity).toFixed(2)}
        </div>
      ))}
        {items.map((i: any) => (
        <BasketItem key={i.id} item={i} />
        ))}
        <hr />
        <div className="total-box">
         <h2>Total: £{total.toFixed(2)}</h2>
         </div>

      <p>Subtotal: £{subtotal.toFixed(2)}</p>
      <p className="saving">Savings: £{savings.toFixed(2)}</p>
      <h3>Total: £{total.toFixed(2)}</h3>
    </div>
  )
}
