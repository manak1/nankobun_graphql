import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { CreateSindanInput } from './dto/create-sindan.input';
import { SindanType } from './entities/sindan.type';
import { SindansService } from './sindans.service';

@Resolver(() => SindanType)
export class SindansResolver {
  constructor(private sindansService: SindansService) {}
  @Query(() => SindanType)
  sindan(@Args('id') id: string) {
    return this.sindansService.getSindan(id);
  }

  @Mutation(() => SindanType)
  createSindan(
    @Args('createSindanInput') createSindanInput: CreateSindanInput,
  ) {
    return this.sindansService.createSindan(createSindanInput);
  }
}
