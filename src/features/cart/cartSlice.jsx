import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Import your API function
import { getCart } from "../../Services/apiCart";

export const fetchCartData = createAsyncThunk("cart/fetchCartData", async () => {
  const response = await getCart();
  //   console.log("This is the response from the CART_SLICE:", response[0]);
  return response[0].items;
});

const initialState = {
  cartData: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action creator for removing an item from the cart
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartData = state.cartData.filter((item) => item._id.toString() !== itemIdToRemove);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.cartData = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
