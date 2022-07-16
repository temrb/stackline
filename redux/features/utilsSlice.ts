import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    supportModal: false,
  },
  reducers: {
    setSupportModal: (state: any, action: PayloadAction<Boolean>) => {
      state.supportModal = action.payload;
    },
  },
});

export const { setSupportModal } = utilsSlice.actions;
export default utilsSlice.reducer;
