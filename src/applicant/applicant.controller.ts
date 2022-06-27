import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantDto } from './model/applicant.dto';
import { ApplicantionDto } from './model/application.dto';

@Controller('applicant')
export class ApplicantController {
    constructor(
        private applicantService: ApplicantService
    ){}
    @Get()
    async all(@Query('page') page = 1) {
        return this.applicantService.paginate(page);
    }

    @Post()
    async create(@Body() body: ApplicantDto) {
        return this.applicantService.create(body);
    }
    @Put(':id')
    async changeStatus(
        @Param('id') id:number,
        @Body() body: ApplicantionDto
    ) {
        return await this.applicantService.update(id, body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.applicantService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.applicantService.delete(id);
    }
}

