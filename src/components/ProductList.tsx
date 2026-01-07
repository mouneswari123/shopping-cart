// import { products } from '../data/products';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../features/basket/basketSlice';
// import { BasketItem } from '../types';
// import '../styles/products.css';

// export default function ProductList() {
//   const dispatch = useDispatch();

//   return (
//     <div className="products">
//       <h2>Products</h2>
//       {products.map(p => (
//         <div className="product" key={p.id}>
//           <span>{p.name}</span>
//           <span>£{p.price.toFixed(2)}</span>
//           <button
//             onClick={() =>
//               dispatch(
//                 addItem({ ...p, quantity: 1 } as BasketItem)
//               )
//             }
//           >
//             Add
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// src/components/ProductList.tsx
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/basket/basketSlice';
import { BasketItem } from '../types';
import '../styles/products.css';

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Products</h2>
      {products.map(p => (
        <div className="product" key={p.id}>
          <span>{p.name}</span>
          <span>£{p.price.toFixed(2)}</span>
          <button
            onClick={() => dispatch(addItem({ ...p, quantity: 1 } as BasketItem))}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
