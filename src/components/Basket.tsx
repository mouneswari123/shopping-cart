// import { useSelector } from 'react-redux';
// import {
//   selectItems,
//   selectSubtotal,
//   selectTotalSavings,
//   selectTotal,
// } from '../features/basket/selectors';
// import '../styles/basket.css';

// export default function Basket() {
//   const items = useSelector(selectItems);
//   const subtotal = useSelector(selectSubtotal);
//   const savings = useSelector(selectTotalSavings);
//   const total = useSelector(selectTotal);

//   return (
//     <div className="basket">
//       <h2>Basket</h2>

//       {items.map(i => (
//         <div key={i.id} className="basket-item">
//           {i.name} x {i.quantity} = £{(i.price * i.quantity).toFixed(2)}
//         </div>
//       ))}

//       <hr />
//       <p>Subtotal: £{subtotal.toFixed(2)}</p>
//       <p className="saving">Savings: £{savings.toFixed(2)}</p>
//       <h3>Total: £{total.toFixed(2)}</h3>
//     </div>
//   );
// }
// src/components/Basket.tsx
import { useSelector } from 'react-redux';
import {
  selectItems,
  selectSubtotal,
  selectOffers,
  selectTotalSavings,
  selectTotal,
} from '../features/basket/selectors';
import BasketItem from './BasketItem';
import '../styles/basket.css';

export default function Basket() {
  const items = useSelector(selectItems);
  const subtotal = useSelector(selectSubtotal);
  const offers = useSelector(selectOffers);
  const savings = useSelector(selectTotalSavings);

  const total = useSelector(selectTotal);

  return (
    <div className="basket">
      <h2>Basket</h2>

      {/* Basket items with quantity controls */}
      {items.map(i => (
        <BasketItem key={i.id} item={i} />
      ))}

      <hr />

      {/* Step 1: Subtotal */}
      <p>Subtotal: £{subtotal.toFixed(2)}</p>

      {/* Step 2: Special offers */}
      {offers.length > 0 ? (
        <div>
          <p className="saving">Savings: £{savings.toFixed(2)}</p>

          <ul>
            {offers.map((o, idx) => (
              <li key={idx}>
                {o.title}: -£{o.saving.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No special offers applied</p>
      )}

      {/* Step 3: Final total */}
      <h3>Total: £{total.toFixed(2)}</h3>
    </div>
  );
}
