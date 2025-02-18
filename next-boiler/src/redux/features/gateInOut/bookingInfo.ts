import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './index';

export const gateSlice = createSlice({
  name: 'gate',
  initialState,
  reducers: {
    setBookingInfoActivityType(state, action: PayloadAction<number>) {
      state.generalInformation.bookingInfo.activityType = action.payload;
    },
    setBookingInfoDateTime(state, action: PayloadAction<string>) {
      state.generalInformation.bookingInfo.dateTime = action.payload;
    },
    setBookingInfoMovementType(state, action: PayloadAction<number>) {
      state.generalInformation.bookingInfo.movementType = action.payload;
    },
    setBookingInfoPaymentMode(state, action: PayloadAction<number>) {
      state.generalInformation.bookingInfo.paymentMode = action.payload;
    },
    setBookingInfoActivityName(state, action: PayloadAction<string>) {
      state.generalInformation.bookingInfo.activityName = action.payload;
    },
    setBookingInfoActivityShortForm(state, action: PayloadAction<string>) {
      state.generalInformation.bookingInfo.activityShortForm = action.payload;
    },
    setBookingInfoLoadingProgram(state, action: PayloadAction<number>) {
      state.generalInformation.bookingInfo.loadingProgram = action.payload;
    },
    setBookingInfoRoNumber(state, action: PayloadAction<number>) {
      state.generalInformation.bookingInfo.roNumber = action.payload;
    },
  },
});

export const {
  setBookingInfoActivityType,
  setBookingInfoDateTime,
  setBookingInfoMovementType,
  setBookingInfoPaymentMode,
  setBookingInfoActivityName,
  setBookingInfoActivityShortForm,
  setBookingInfoLoadingProgram,
  setBookingInfoRoNumber,
} = gateSlice.actions;

export default gateSlice.reducer;
