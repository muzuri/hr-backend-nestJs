import { IsEmail, IsNotEmpty, IsString} from "class-validator"
export class UserCreateDto
{
    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsNotEmpty()
    @IsEmail()
    email: string
    
    password: string
}