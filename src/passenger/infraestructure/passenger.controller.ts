import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PassengerDTO } from '../domain/dto/passenger.dto';
import { UpdatePassengerDTO } from '../domain/dto/update-passenger.dto';
import { ClientProxyGlobal } from '../../common/infraestructure/proxy/client-proxy';
import { IPassenger } from '../../common/infraestructure/interfaces/passenger.interface';
import { PassengerMSG } from '../../common/infraestructure/enums';

@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxyGlobal) {}

  private readonly clientProxyPassenger = this.clientProxy.clientProxyPassenger();

  @Post()
    create(@Body() passenger: PassengerDTO): Observable<IPassenger>{
        return this.clientProxyPassenger.send(PassengerMSG.CREATE, passenger);
    }

    @Get()
    findAll(): Observable<IPassenger[]>{
        return this.clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param() id: string): Observable<IPassenger>{
        return this.clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
    }

    @Patch(':id')
    update(@Param() id: string, @Body() passenger: UpdatePassengerDTO):  Observable<IPassenger>{
        return this.clientProxyPassenger.send(PassengerMSG.UPDATE, {id, passenger});
    }

    @Delete(':id')
    delete(@Param() id: string): Observable<void>{
        return this.clientProxyPassenger.send(PassengerMSG.DELETE, id);
    }
}
