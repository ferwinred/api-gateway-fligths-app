import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
 intercept(context: ExecutionContext, next: CallHandler) {

    const ctx = context.switchToHttp()
    const req = ctx.getRequest();
    const res = ctx.getResponse();


    let response: any = next.handle().pipe(map(data => ({ path: req.url, status: res.statusCode, data })))

    return response;
  }
}
