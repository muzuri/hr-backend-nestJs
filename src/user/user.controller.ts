import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller, 
    Get,
    Param,
    Post,
    Query,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from './models/user-create.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
// AuthGuard()
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async Getall(
        @Query('page') page: number = 1
    ): Promise<User[]>{
        return this.userService.paginate(page);
    }
    @Post()
    async create(
        @Body() body: UserCreateDto): Promise<User>{
        const saltorRounds = 12;
        const hashed_password = await bcrypt.hash(body.password, saltorRounds);
        return this.userService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hashed_password
        });
    }
    @Get(':id')
    async get(@Param('id') id: number) {
        return await this.userService.findOne1(id);
    }
 
}
