import { AdressDetails } from "./AdressDetails";
export class RestaurantResponse {
    name: string='';
    owner: string='';
    email: string='';
    contact: number=0;
    type: string='';
    addressDetails: AdressDetails = new AdressDetails;
  }
  