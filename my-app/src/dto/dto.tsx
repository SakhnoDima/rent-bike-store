export interface ICard {
  name: string;
  type: string;
  color: string;
  id: string;
  _id: string;
  status: string;
  price: number;
}

export interface IFormInitValues {
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  id: string;
  description: string;
}

export interface IStatistics {
  totalBike: number;
  available: number;
  busy: number;
  avg: number;
}

export interface IUpdateBikeStatus {
  id: string;
  status: string;
}

export interface CustomError {
  response: {
    data: {
      message: string;
    };
  };
}
