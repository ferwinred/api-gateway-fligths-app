import { Module } from '@nestjs/common';
import { PassengerController } from './infraestructure/passenger.controller';
import { ProxyModule } from '../common/infraestructure/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PassengerController],
})
export class PassengerModule {}
