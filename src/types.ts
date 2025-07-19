export type Location = {
  streetAddress: string;
  room?: string;
  suite: string;
  city: string;
  zipCode: string;
  stateCode: string;
};

export type SpaCenter = {
  name: string;
  address: Location;
  email: string;
  phone: string;
  logoUrl: string;
};
  