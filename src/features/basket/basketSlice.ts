import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type BasketItem = {
  id: string
  name: string
  price: number
  quantity: number
}

const initialState: BasketItem[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<BasketItem>) {
      const item = state.find(i => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    changeQty(state, action: PayloadAction<{ id: string; qty: number }>) {
  const index = state.findIndex(i => i.id === action.payload.id)

  if (index !== -1) {
    if (action.payload.qty <= 0) {
      state.splice(index, 1) 
    } else {
      state[index].quantity = action.payload.qty
    }
  }
}
  },
})

export const { addItem, changeQty } = basketSlice.actions
export default basketSlice.reducer
