import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GateState, GeneralInformation, Transaction } from './types';

export const initialState: GateState = {
  transactions: [],
  loadingProgramDetail: {
    activityType: 0,
    loadingProgram: '',
  },
  generalInformation: {
    bookingInfo: {
      activityType: 0,
      dateTime: '',
      movementType: 0,
      paymentMode: 0,
      activityName: '',
      activityShortForm: '',
      loadingProgram: 0,
      roNumber: 0,
    },
    stakeholders: {
      shippingLine: 0,
      shippingLineName: '',
      client: 0,
      clientName: '',
    },
    shippingLogistics: {
      shipper: 0,
      consignee: 0,
      transported: 0,
      forwarder: 0,
      cAndFAgent: 0,
      scacCode: 0,
    },
    vesselDestination: {
      previousLocation: 0,
      voyage: 0,
      arrivalDate: '',
      destination: 0,
      destinationName: '',
      vessel: 0,
      vesselName: '',
      dischargePort: 0,
      dischargePortName: '',
      portOfLoading: 0,
      portOfLoadingName: '',
    },
    operationalInfo: {
      shift: 0,
      checkedBy: '',
    },
  },
};

export const gateSlice = createSlice({
  name: 'gate',
  initialState,
  reducers: {
    // Transactions
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },

    // Loading Program Detail
    setLoadingProgramActivityType(state, action: PayloadAction<number>) {
      state.loadingProgramDetail.activityType = action.payload;
    },
    setLoadingProgramLoadingProgram(state, action: PayloadAction<string>) {
      state.loadingProgramDetail.loadingProgram = action.payload;
    },

    // Entire object if needed
    setGeneralInformation(state, action: PayloadAction<GeneralInformation>) {
      state.generalInformation = action.payload;
    },

    //  Operational Info
    setOperationalInfoShift(state, action: PayloadAction<number>) {
      state.generalInformation.operationalInfo.shift = action.payload;
    },
    setOperationalInfoCheckedBy(state, action: PayloadAction<string>) {
      state.generalInformation.operationalInfo.checkedBy = action.payload;
    },
  },
});

export const {
  // Transactions
  setTransactions,
  addTransaction,

  // Loading Program Detail
  setLoadingProgramActivityType,
  setLoadingProgramLoadingProgram,

  // General Information (entire object)
  setGeneralInformation,

  // Operational Info
  setOperationalInfoShift,
  setOperationalInfoCheckedBy,
} = gateSlice.actions;

export default gateSlice.reducer;
