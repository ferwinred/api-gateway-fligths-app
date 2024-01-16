import { PartialType } from '@nestjs/swagger';
import { FlightDTO } from './flight.dto';


export class UpdateFlightDTO extends PartialType(FlightDTO) {}