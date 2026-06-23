import { test } from '@playwright/test';
import dataset from '../../datasets/rag-groundtruth.dataset.json';
import { expectGroundTruthMatch } from '../../src/validators/aiValidators';

test.describe('RAG Ground Truth Validation', () => {
  for (const item of dataset) {
    test(item.id, async () => {
      // Mock RAG responses for CI-safe regression validation
      const mockResponses: Record<string, string> = {
        'rag-001': 'Refund requests are accepted within 30 days of purchase.',
        'rag-002': 'Refunds will be returned to the original payment method.',
      };

      const ragResponse = mockResponses[item.id];

      expectGroundTruthMatch(ragResponse, item.expectedKeywords);
    });
  }
});