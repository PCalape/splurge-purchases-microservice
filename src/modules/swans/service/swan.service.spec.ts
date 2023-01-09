import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { SwanService as SwanService } from './swan.service';
import { Swan } from '@schemas/swan.schema';

const mockModel = {};

describe('SwanService', () => {
  let service: SwanService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SwanService,
        {
          provide: getModelToken(Swan.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<SwanService>(SwanService);
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
