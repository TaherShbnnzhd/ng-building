/* بسم الله الرحمن الرحیم */

export interface ICountry {
  name?: string;
  code?: string;
}

export interface IRepresentative {
  name?: string;
  image?: string;
}

export interface ICustomer {
  id?: number;
  name?: string;
  country?: ICountry;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: IRepresentative;
  verified?: boolean;
  balance?: boolean;
}
