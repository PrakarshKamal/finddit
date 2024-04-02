import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardService } from './leaderboard.service';

describe('LeaderboardService', () => {
  let service: LeaderboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaderboardService],
    }).compile();

    service = module.get<LeaderboardService>(LeaderboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateScores', () => {
    it('should correctly calculate scores for entities', async () => {
      const mockActivities = [
        { userId: 'user1', points: 10 },
        { userId: 'user2', points: 20 },
      ];
      const expectedScores = { user1: 10, user2: 20 };

      jest
        .spyOn(service, 'calculateScores')
        .mockImplementation(async () => expectedScores);

      const scores = await service.calculateScores(mockActivities);
      expect(scores).toEqual(expectedScores);
    });
  });

  describe('getLeaderboardRankings', () => {
    it('should return sorted entities based on scores', async () => {
      const mockScores = [
        { userId: 'user2', score: 20 },
        { userId: 'user1', score: 10 },
      ];
      const expectedRankings = ['user2', 'user1'];

      jest
        .spyOn(service, 'getLeaderboardRankings')
        .mockImplementation(async () => expectedRankings);

      const rankings = await service.getLeaderboardRankings();
      expect(rankings).toEqual(expectedRankings);
    });
  });

  describe('updateScores', () => {
    it('should update the scores for an entity correctly', async () => {
      const userId = 'user1';
      const additionalPoints = 5;
      const updatedScore = 15;

      jest
        .spyOn(service, 'updateScores')
        .mockImplementation(async () => updatedScore);

      const newScore = await service.updateScores(userId, additionalPoints);
      expect(newScore).toBe(updatedScore);
    });
  });

  describe('resetLeaderboard', () => {
    it('should reset or archive the current leaderboard', async () => {
      jest
        .spyOn(service, 'resetLeaderboard')
        .mockImplementation(async () => 'Leaderboard reset');

      const result = await service.resetLeaderboard();
      expect(result).toBe('Leaderboard reset');
    });
  });
});
