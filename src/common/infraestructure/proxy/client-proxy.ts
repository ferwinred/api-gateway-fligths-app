import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { MailQueue } from "../enums";


@Injectable()
export class ClientProxyGlobal {
    constructor(
        private readonly configService: ConfigService
    ){}

    clientProxyUser(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.configService.get('AMQP_URL'),
                queue: MailQueue.UserQueue,
            },
        })
    }

    clientProxyPassenger(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.configService.get('AMQP_URL'),
                queue: MailQueue.PassengerQueue,
            },
        })
    }

    clientProxyFlight(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.configService.get('AMQP_URL'),
                queue: MailQueue.FlightQueue,
            },
        })
    }

}