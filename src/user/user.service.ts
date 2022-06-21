import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async all(): Promise<User[]>{
        return await this.userRepository.find();
    }
    async create(data){
       return await this.userRepository.save(data);
    }
    async findOne(email): Promise<User>{
        return await this.userRepository.findOne({where: {email: email}});
     }
     async findOne1(id): Promise<User>{
        return await this.userRepository.findOne({where: {id: id}});
     }
     async paginate(page: number): Promise<any>{
         const take =7;
         const [users, total] = await this.userRepository.findAndCount({
             take: take,
             skip:(page-1) * take
         });
         return {
             data: users.map(user => {
                 const {password, ...data} = user;
                 return data;
             }),
             meta:{
                 total,
                 page,
                 last_page: Math.ceil(total/take)
             }
         }
     }
}
