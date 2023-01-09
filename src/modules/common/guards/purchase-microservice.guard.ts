import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TOKEN } from '../environment';

@Injectable()
export class PurchaseGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: any): boolean | Promise<boolean> | Observable<boolean> {
  return request.headers.token === TOKEN;
}
