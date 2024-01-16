import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { UserDTO } from '../domain/dto/user.dto';
import { UpdateUserDTO } from '../domain/dto/update-user.dto';
import { ClientProxyGlobal } from '../../common/infraestructure/proxy/client-proxy';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { IUser } from '../../common/infraestructure/interfaces/user.interface';
import { UserMSG } from '../../common/infraestructure/enums';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyGlobal) {}

  private readonly clientProxyUser = this.clientProxy.clientProxyUser();


  @Post()
  create(@Body() user: UserDTO): Observable<IUser>{
      return this.clientProxyUser.send(UserMSG.CREATE, user);
  }

  @Get()
  async findAll(){
    const response = await lastValueFrom(this.clientProxyUser.send(UserMSG.FIND_ALL, ''))
    return response;
  }


  @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string){
     
            const response = this.clientProxyUser.send(UserMSG.FIND_ONE, id);
    
            return response;
       
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() user: UpdateUserDTO):  Observable<IUser>{
        return this.clientProxyUser.send(UserMSG.UPDATE, {id, user});
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string): Observable<void>{
        return this.clientProxyUser.send(UserMSG.DELETE, id);
    }

}
