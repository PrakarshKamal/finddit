import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { DbService } from 'src/db/db.service';
import { NearbySearchService } from 'src/nearby-search/nearby-search.service';
import { LeaderboardService } from 'src/leaderboard/leaderboard.service';
import { EmailService } from 'src/leaderboard/email.service';
import { CreateGroupDto } from './dto/create-group.dto';

jest.mock('src/db/db.service');
jest.mock('src/nearby-search/nearby-search.service');
jest.mock('src/leaderboard/leaderboard.service');
jest.mock('src/leaderboard/email.service');

describe('GroupsService', () => {
  let service: GroupsService;
  let dbService: DbService;
  let nearbySearchService: NearbySearchService;
  let leaderboardService: LeaderboardService;
  let emailService: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        DbService,
        NearbySearchService,
        LeaderboardService,
        EmailService,
      ],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
    dbService = module.get<DbService>(DbService);
    nearbySearchService = module.get<NearbySearchService>(NearbySearchService);
    leaderboardService = module.get<LeaderboardService>(LeaderboardService);
    emailService = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(dbService).toBeDefined();
    expect(nearbySearchService).toBeDefined();
    expect(leaderboardService).toBeDefined();
    expect(emailService).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create a group', async () => {
      const createGroupDto: CreateGroupDto = {};
      jest.spyOn(service, 'create').mockResolvedValue('mockDocId');
      expect(await service.create(createGroupDto)).toBe('mockDocId');
    });
  });

  describe('addGroupMembersToGroup', () => {
    it('should add group members and admin to the group', async () => {
      const result = await service.addGroupMembersToGroup(
        'mockGroupId',
        ['member@example.com'],
        'admin@example.com',
        'Test Group',
      );
      expect(result).toContain('Admin & Members have been added');
    });
  });
});
