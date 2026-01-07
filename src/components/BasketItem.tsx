
// import { useDispatch } from 'react-redux';
// import { changeQty } from '../features/basket/basketSlice';
// import { BasketItem as ItemType } from '../types';

// type Props = {
//   item: ItemType;
// };

// export default function BasketItem({ item }: Props) {
//   const dispatch = useDispatch();

//   return (
//     <div className="basket-item">
//       <span>{item.name}</span>

//       <div className="qty">
//         <button
//           onClick={() =>
//             dispatch(changeQty({ id: item.id, qty: item.quantity - 1 }))
//           }
//         >
//           −
//         </button>

//         <span>{item.quantity}</span>

//         <button
//           onClick={() =>
//             dispatch(changeQty({ id: item.id, qty: item.quantity + 1 }))
//           }
//         >
//           +
//         </button>
//       </div>

//       <span>£{(item.price * item.quantity).toFixed(2)}</span>
//     </div>
//   );
// }

import { useDispatch } from 'react-redux';
import { changeQty } from '../features/basket/basketSlice';
import { BasketItem as ItemType } from '../types';

type Props = {
  item: ItemType;
};

export default function BasketItem({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="basket-item">
      <span>{item.name}</span>

      <div className="qty">
        {/* Decrease quantity */}
        <button
          onClick={() =>
            dispatch(changeQty({ id: item.id, qty: item.quantity - 1 }))
          }
        >
          −
        </button>

        <span>{item.quantity}</span>

        {/* Increase quantity */}
        <button
          onClick={() =>
            dispatch(changeQty({ id: item.id, qty: item.quantity + 1 }))
          }
        >
          +
        </button>
      </div>

      <span>£{(item.price * item.quantity).toFixed(2)}</span>
    </div>
  );
}

