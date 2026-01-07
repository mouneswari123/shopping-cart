
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { BasketItem } from '../../types';

// interface BasketState {
//   items: BasketItem[];
// }

// const initialState: BasketState = {
//   items: [],
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<BasketItem>) => {
//       const existing = state.items.find(i => i.id === action.payload.id);
//       if (existing) {
//         existing.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     changeQty: (state, action: PayloadAction<{ id: string; qty: number }>) => {
//       const item = state.items.find(i => i.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.qty;
//         if (item.quantity <= 0) {
//           state.items = state.items.filter(i => i.id !== action.payload.id);
//         }
//       }
//     },
//   },
// });

// export const { addItem, changeQty } = basketSlice.actions;
// export default basketSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItem } from '../../types';

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Add item to basket
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    // Change quantity (increment/decrement)
    changeQty: (state, action: PayloadAction<{ id: string; qty: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.qty;

        // Remove item if quantity <= 0
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addItem, changeQty } = basketSlice.actions;
export default basketSlice.reducer;
