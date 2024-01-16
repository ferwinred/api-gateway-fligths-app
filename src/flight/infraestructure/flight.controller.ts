import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { Observable, lastValueFrom } from 'rxjs';

import { FlightDTO } from '../domain/dto/flight.dto';
import { UpdateFlightDTO } from '../domain/dto/update-flight.dto';
import { ClientProxyGlobal } from '../../common/infraestructure/proxy/client-proxy';
import { FlightMSG, PassengerMSG } from '../../common/infraestructure/enums';
import { IFlight } from '../../common/infraestructure/interfaces/flight.interface';

@Controller('api/v1/flight')
export class FlightController {
  constructor(private readonly clientProxy: ClientProxyGlobal) {}

  private readonly clientProxyFlight = this.clientProxy.clientProxyFlight();
  private readonly clientProxyPassenger = this.clientProxy.clientProxyPassenger();

  @Post()
  create(@Body() flight: FlightDTO): Observable<IFlight>{
      return this.clientProxyFlight.send(FlightMSG.CREATE, flight);
  }

  @Get()
  findAll(): Observable<IFlight[]>{
      return this.clientProxyFlight.send(FlightMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param() id: string): Observable<IFlight>{
      return this.clientProxyFlight.send(FlightMSG.FIND_ONE, id);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() flight: UpdateFlightDTO):  Observable<IFlight>{
      return this.clientProxyFlight.send(FlightMSG.UPDATE, {id, flight});
  }

  @Delete(':id')
  delete(@Param() id: string): Observable<void>{
      return this.clientProxyFlight.send(FlightMSG.DELETE, id);
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(@Param('flightId') flightId: string, @Param('passengerId') passengerId: string){

      const passengerObs = this.clientProxyPassenger.send(PassengerMSG.FIND_ONE, passengerId);

      const passenger = await lastValueFrom(passengerObs).catch(err => err);

      if (!passenger) throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);

      return this.clientProxyFlight.send(FlightMSG.ADD_PASSENGER, {passenger: passengerId, flight: flightId});

  }
}
