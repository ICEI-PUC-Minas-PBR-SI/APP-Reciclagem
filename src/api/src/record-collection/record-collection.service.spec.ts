import { Test, TestingModule } from '@nestjs/testing';
import { RecordCollectionService } from './record-collection.service';

describe('RecordCollectionService', () => {
  let service: RecordCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordCollectionService],
    }).compile();

    service = module.get<RecordCollectionService>(RecordCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
