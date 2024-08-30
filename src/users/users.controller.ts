import { Controller, Get } from "@nestjs/common";
import { UsersService } from '@/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('')
  getUsers() {
    return this.userService.getUser();
  }
}
