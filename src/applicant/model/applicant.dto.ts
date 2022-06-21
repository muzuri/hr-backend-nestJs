import { IsNotEmpty } from "class-validator";

export class ApplicantDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    email: string;

   @IsNotEmpty()
    cv: string;

    @IsNotEmpty()
    education_level: string; 
    
    @IsNotEmpty()
    years_experience: number;
    
}