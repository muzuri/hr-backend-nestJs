import { IsNotEmpty } from "class-validator";

export class ApplicantionDto {
    id: number;
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;
    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    country: string;
    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    status: string;

     @IsNotEmpty()
    cv: string;

    @IsNotEmpty()
    education_level: string; 
    
    @IsNotEmpty()
    years_experience: number;
    
}