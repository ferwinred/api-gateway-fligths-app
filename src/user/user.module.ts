import { Module } from '@nestjs/common';
import { UserController } from './infraestructure/user.controller';
import { ProxyModule } from '../common/infraestructure/proxy/proxy.module';

@Module({
  imports: [ ProxyModule ],
  controllers: [UserController],
})
export class UserModule {}
