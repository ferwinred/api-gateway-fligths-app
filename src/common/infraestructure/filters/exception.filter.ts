import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    
    private readonly logger = new Logger(AllExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();

        let status = exception instanceof HttpException 
            ? exception.getStatus() 
            : HttpStatus.INTERNAL_SERVER_ERROR

        const msg = exception instanceof HttpException 
        ? exception.getResponse() 
        : exception

        if (msg.status) status = msg.status;

        this.logger.error(`Status: ${status} Error: ${JSON.stringify(msg.message)}`);

        res.status(status).json({
            timestamp: new Date().toISOString(),
            path: req.url,
            message: msg.message,
        })
    }
}