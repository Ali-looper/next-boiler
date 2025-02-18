import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './index';

export const gateSlice = createSlice({
  name: 'gate',
  initialState,
  reducers: {
    setShippingLogisticsShipper(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.shipper = action.payload;
    },
    setShippingLogisticsConsignee(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.consignee = action.payload;
    },
    setShippingLogisticsTransported(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.transported = action.payload;
    },
    setShippingLogisticsForwarder(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.forwarder = action.payload;
    },
    setShippingLogisticsCAndFAgent(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.cAndFAgent = action.payload;
    },
    setShippingLogisticsScacCode(state, action: PayloadAction<number>) {
      state.generalInformation.shippingLogistics.scacCode = action.payload;
    },
  },
});

export const {
  setShippingLogisticsShipper,
  setShippingLogisticsConsignee,
  setShippingLogisticsTransported,
  setShippingLogisticsForwarder,
  setShippingLogisticsCAndFAgent,
  setShippingLogisticsScacCode,
} = gateSlice.actions;

export default gateSlice.reducer;
