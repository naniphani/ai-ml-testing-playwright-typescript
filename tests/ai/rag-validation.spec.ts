import { test } from '@playwright/test';
import dataset from '../../datasets/rag-groundtruth.dataset.json';
import { expectGroundTruthMatch } from '../../src/validators/aiValidators';

test.describe('RAG Ground Truth Validation', () => {

  for (const item of dataset) {

    test(item.id, async () => {

      // Mock RAG response for now
      const ragResponse =
        'Refund requests are accepted within 30 days of purchase.';

      expectGroundTruthMatch(
        ragResponse,
        item.expectedKeywords
      );

    });

  }

});