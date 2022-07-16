import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';

export const fetchProductData = createAsyncThunk(
  'userData/fetchUserData',
  async () => {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: {},
    loading: false,
    error: false,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProductData.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
        state.status = 'success';
      }
    );
    builder.addCase(fetchProductData.pending, (state: any) => {
      state.loading = true;
      state.error = false;
      state.status = 'loading';
    });
    // case for status null is handled by the default case
    builder
      .addCase(fetchProductData.rejected, (state: any) => {
        state.loading = false;
        state.error = true;
        state.status = 'error';
      })
      .addDefaultCase((state: any) => {
        state.loading = false;
        state.error = false;
        state.status = 'null';
      });
  },
});

export const productData = createSelector(
  (state: any) => ({
    data: state.data,
  }),
  (state: any) => state.productData
);

export default productSlice.reducer;
