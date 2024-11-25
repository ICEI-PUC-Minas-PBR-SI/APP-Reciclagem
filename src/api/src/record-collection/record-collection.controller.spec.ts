import { Test, TestingModule } from '@nestjs/testing';
import { RecordCollectionController } from './record-collection.controller';
import { RecordCollectionService } from './record-collection.service';

describe('RecordCollectionController', () => {
  let controller: RecordCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordCollectionController],
      providers: [RecordCollectionService],
    }).compile();

    controller = module.get<RecordCollectionController>(RecordCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
