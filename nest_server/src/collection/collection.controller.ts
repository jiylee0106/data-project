import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { GetAllCollectionResponseDto } from './dto/collection.response.dto';

@ApiTags('Collection')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @ApiOperation({ summary: '유저 컬렉션 제공' })
  @Get()
  async getAllCollection(
    @Req() req: RequestUser,
  ): Promise<GetAllCollectionResponseDto> {
    const result = await this.collectionService.getAllCollectionService(
      req.user.id,
    );
    return result;
  }
}
