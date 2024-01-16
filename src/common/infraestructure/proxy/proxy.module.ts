import { Module } from "@nestjs/common";
import { ClientProxyGlobal } from "./client-proxy";

@Module({
    providers: [ ClientProxyGlobal ],
    exports: [ ClientProxyGlobal ],
})
export class ProxyModule{}