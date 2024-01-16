
import { PartialType } from "@nestjs/swagger";
import { PassengerDTO } from "./passenger.dto";

export class UpdatePassengerDTO extends PartialType(PassengerDTO) {}