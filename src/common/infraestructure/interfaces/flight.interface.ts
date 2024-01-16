import { IPassenger } from 'src/common/infraestructure/interfaces/passenger.interface';
import { IWeather } from './weather.interface';

export interface IFlight {
  id?: string;
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
  weather: IWeather[];
}