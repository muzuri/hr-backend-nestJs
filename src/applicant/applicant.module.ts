import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';
import { Applicant } from './model/applicant.entity';
import { UploadController } from './upload.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applicant]),
    CommonModule
  ],
  controllers: [ApplicantController, UploadController],
  providers: [ApplicantService]
})
export class ApplicantModule {}
