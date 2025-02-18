import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './index';

export const gateSlice = createSlice({
  name: 'gate',
  initialState,
  reducers: {
    setVesselDestinationPreviousLocation(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.previousLocation = action.payload;
    },
    setVesselDestinationVoyage(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.voyage = action.payload;
    },
    setVesselDestinationArrivalDate(state, action: PayloadAction<string>) {
      state.generalInformation.vesselDestination.arrivalDate = action.payload;
    },
    setVesselDestinationDestination(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.destination = action.payload;
    },
    setVesselDestinationDestinationName(state, action: PayloadAction<string>) {
      state.generalInformation.vesselDestination.destinationName = action.payload;
    },
    setVesselDestinationVessel(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.vessel = action.payload;
    },
    setVesselDestinationVesselName(state, action: PayloadAction<string>) {
      state.generalInformation.vesselDestination.vesselName = action.payload;
    },
    setVesselDestinationDischargePort(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.dischargePort = action.payload;
    },
    setVesselDestinationDischargePortName(state, action: PayloadAction<string>) {
      state.generalInformation.vesselDestination.dischargePortName = action.payload;
    },
    setVesselDestinationPortOfLoading(state, action: PayloadAction<number>) {
      state.generalInformation.vesselDestination.portOfLoading = action.payload;
    },
    setVesselDestinationPortOfLoadingName(state, action: PayloadAction<string>) {
      state.generalInformation.vesselDestination.portOfLoadingName = action.payload;
    },
  },
});

export const {
  setVesselDestinationPreviousLocation,
  setVesselDestinationVoyage,
  setVesselDestinationArrivalDate,
  setVesselDestinationDestination,
  setVesselDestinationDestinationName,
  setVesselDestinationVessel,
  setVesselDestinationVesselName,
  setVesselDestinationDischargePort,
  setVesselDestinationDischargePortName,
  setVesselDestinationPortOfLoading,
  setVesselDestinationPortOfLoadingName,
} = gateSlice.actions;

export default gateSlice.reducer;
