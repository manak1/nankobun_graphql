import { Module } from '@nestjs/common';
import { SindansService } from './sindans.service';
import { SindansResolver } from './sindans.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sindan } from './entities/sindan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sindan])],
  providers: [SindansService, SindansResolver],
})
export class SindansModule {}
