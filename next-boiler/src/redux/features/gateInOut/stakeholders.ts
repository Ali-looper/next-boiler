import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './index';

export const gateSlice = createSlice({
  name: 'gate',
  initialState,
  reducers: {
    setStakeholdersShippingLine(state, action: PayloadAction<number>) {
      state.generalInformation.stakeholders.shippingLine = action.payload;
    },
    setStakeholdersShippingLineName(state, action: PayloadAction<string>) {
      state.generalInformation.stakeholders.shippingLineName = action.payload;
    },
    setStakeholdersClient(state, action: PayloadAction<number>) {
      state.generalInformation.stakeholders.client = action.payload;
    },
    setStakeholdersClientName(state, action: PayloadAction<string>) {
      state.generalInformation.stakeholders.clientName = action.payload;
    },
  },
});

export const {
  setStakeholdersShippingLine,
  setStakeholdersShippingLineName,
  setStakeholdersClient,
  setStakeholdersClientName,
} = gateSlice.actions;

export default gateSlice.reducer;
