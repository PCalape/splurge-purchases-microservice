import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { PurchaseService } from './purchase.service';
import { Purchase } from '@schemas/purchase.schema';

const mockModel = {};

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseService,
        {
          provide: getModelToken(Purchase.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<PurchaseService>(PurchaseService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTestProfile', () => {
    // it('should be a callable', () => {
    //   expect(typeof service.createTestProfile).toBe('function');
    // });
    // describe('execution', () => {
    //   it('should return the right number of data corresponding for average users', async () => {});
    // });
  });
});
