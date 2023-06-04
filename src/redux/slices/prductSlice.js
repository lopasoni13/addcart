import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchdata", async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const jsonData = await data.json();
  return jsonData;
});

const productSlice = createSlice({
  name: "productSlice",

  initialState: {
    product: [],
    statuse: "idle", // fail idle pending
    error: null,
  },

  extraReducers: function (builder) {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.product = action.payload;
        state.statuse = "fulfilled";
      })
      .addCase(fetchData.pending, (state, action) => {
        state.statuse = "loading";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.statuse = "rejected";
      });
  },
});

export default productSlice.reducer;
