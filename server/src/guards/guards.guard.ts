import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  private requiredRole: string;


  constructor(role: string) {
    this.requiredRole = role;
  }

  canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest();
    const user = request.user;


    if (!user) {
      throw new ForbiddenException('Kirish mumkin emas! Avval tizimga kiring.');
    }


    if (user.role !== this.requiredRole) {
      throw new ForbiddenException(`Sizda ${this.requiredRole} huquqi yo'q!`);
    }

    return true;
  }
}

