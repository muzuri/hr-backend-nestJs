import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { skip } from 'rxjs';
import { Repository } from 'typeorm';
import { Applicant } from './model/applicant.entity';

@Injectable()
export class ApplicantService {
    constructor(
        @InjectRepository(Applicant) private readonly applicantRepository: Repository<Applicant>
    ){}

    async paginate(page = 1): Promise<any> {
        const take = 10;

        const [data, total] = await this.applicantRepository.findAndCount({
            take,
            skip: (page - 1) * take,
        });

        return {
            data: data,
            meta: {
                total,
                page,
                last_page: Math.ceil(total / take)
            }
        }
    }

    async create(data): Promise<any> {
        return this.applicantRepository.save(data);
    }

    async findOne(id: number): Promise<any> {
        return this.applicantRepository.findOne({where: {id: id}});
    }

    async update(id: number, data): Promise<any> {
        return this.applicantRepository.update(id, data)
    }

    async changeStatusPassed(id: number): Promise<any> {
       return await this.applicantRepository.update(
          { id: id },
          { status: "Passed"},
        );

      }
      async changeStatus(id: number, status: string): Promise<any> {
       return await this.applicantRepository.update(
          { id: id },
          { status: status},
        );
      }

    async delete(id: number): Promise<any> {
        return this.applicantRepository.delete(id);
    }
}
