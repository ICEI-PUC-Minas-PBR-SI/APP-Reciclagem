import { PartialType } from '@nestjs/swagger';
import { CreateRecordCollectionDto } from './create-record-collection.dto';

export class UpdateRecordCollectionDto extends PartialType(
  CreateRecordCollectionDto,
) {}
