import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  isOpen: boolean
  items: Menu[]
  step: number
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  step: 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state: { isOpen: boolean }) => {
      state.isOpen = true
    },
    close: (state: { isOpen: boolean }) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Menu>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('o prato ja foi adicionado!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    nextStep: (state) => {
      if (state.step < 4) state.step += 1
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove, nextStep, prevStep, setStep, clear } =
  cartSlice.actions
export default cartSlice.reducer
