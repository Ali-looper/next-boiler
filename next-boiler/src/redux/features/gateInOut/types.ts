export interface Transaction {
  id: number;
  description?: string;
}

export interface LoadingProgramDetail {
  activityType: number;
  loadingProgram: string;
}

export interface BookingInfo {
  activityType: number;
  dateTime: string;
  movementType: number;
  paymentMode: number;
  activityName: string;
  activityShortForm: string;
  loadingProgram: number;
  roNumber: number;
}

export interface Stakeholders {
  shippingLine: number;
  shippingLineName: string;
  client: number;
  clientName: string;
}

export interface ShippingLogistics {
  shipper: number;
  consignee: number;
  transported: number;
  forwarder: number;
  cAndFAgent: number;
  scacCode: number;
}

export interface VesselDestination {
  previousLocation: number;
  voyage: number;
  arrivalDate: string; // Or Date
  destination: number;
  destinationName: string;
  vessel: number;
  vesselName: string;
  dischargePort: number;
  dischargePortName: string;
  portOfLoading: number;
  portOfLoadingName: string;
}

export interface OperationalInfo {
  shift: number;
  checkedBy: string;
}

export interface GeneralInformation {
  bookingInfo: BookingInfo;
  stakeholders: Stakeholders;
  shippingLogistics: ShippingLogistics;
  vesselDestination: VesselDestination;
  operationalInfo: OperationalInfo;
}

export interface GateState {
  transactions: Transaction[];
  loadingProgramDetail: LoadingProgramDetail;
  generalInformation: GeneralInformation;
}
