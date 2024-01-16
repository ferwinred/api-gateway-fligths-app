import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { FlightModule } from './flight/flight.module';
import { PassengerModule } from './passenger/passenger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FlightModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
