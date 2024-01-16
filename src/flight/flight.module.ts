import { Module } from '@nestjs/common';
import { FlightController } from './infraestructure/flight.controller';
import { ProxyModule } from '../common/infraestructure/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
})
export class FlightModule {}
