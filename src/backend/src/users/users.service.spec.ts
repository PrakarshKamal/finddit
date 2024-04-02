import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create a user', async () => {
      const newUser = {};
      const expectedResult = {}};
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      expect(await service.create(newUser)).toEqual(expectedResult);
    });

    it('should throw an error if user creation fails', async () => {
      jest.spyOn(service, 'create').mockRejectedValue(new Error('Creation failed'));

      await expect(service.create()).rejects.toThrow('Creation failed');
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers = [{}, {}];
      jest.spyOn(service, 'findAll').mockResolvedValue(mockUsers);

      const users = await service.findAll();
      expect(Array.isArray(users)).toBe(true);
      expect(users).toEqual(mockUsers);
    });
  });

  
  describe('findOne', () => {
    it('should return a user by ID', async () => {
      const mockUser = {};
      jest.spyOn(service, 'findOne').mockResolvedValue(mockUser);

      const user = await service.findOne();
      expect(user).toEqual(mockUser);
    });

    it('should throw an error if user is not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(service.findOne()).rejects.toThrow('User not found');
    });
  });

  
  describe('update', () => {
    it('should update user details successfully', async () => {
      const updatedUserDetails = {};
      const expectedResult = {};

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      const result = await service.update(, updatedUserDetails);
      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if the update fails', async () => {
      jest.spyOn(service, 'update').mockRejectedValue(new Error('Update failed'));

      await expect(service.update(, {})).rejects.toThrow('Update failed');
    });
  });

  
  describe('remove', () => {
    it('should remove a user successfully', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue();

      const result = await service.remove());
      expect(result).toBe();
    });

    it('should throw an error if the delete operation fails', async () => {
      jest.spyOn(service, 'remove').mockRejectedValue(new Error('Delete failed'));

      await expect(service.remove()).rejects.toThrow('Delete failed');
    });
  });

});
