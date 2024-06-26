export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Address {
    geo: Geo;
  }
  
  export interface User {
    id: number;
    name: string;
    address: Address;
  }
  