import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSindanInput } from './dto/create-sindan.input';
import { Sindan } from './entities/sindan.entity';

@Injectable()
export class SindansService {
  constructor(
    @InjectRepository(Sindan) private sindanRepository: Repository<Sindan>,
  ) {}

  async getSindan(id: string) {
    return this.sindanRepository.findOne(id);
  }

  async createSindan(createSindanInput: CreateSindanInput) {
    const { name, author, height, unit, emoji } = createSindanInput;
    const sindan = this.sindanRepository.create({
      emoji,
      name,
      author,
      height,
      unit,
      createdAt: new Date().toISOString(),
    });

    return this.sindanRepository.save(sindan);
  }
}
