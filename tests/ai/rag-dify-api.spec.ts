import 'dotenv/config';
import { test } from '@playwright/test';
import dataset from '../../datasets/rag-groundtruth.dataset.json';
import { askDify } from '../../src/clients/difyClient';
import { expectGroundTruthMatch } from '../../src/validators/aiValidators';

test.describe('Dify RAG Validation', () => {

  test.skip(
    !process.env.DIFY_API_KEY,
    'DIFY_API_KEY not configured'
  );

  for (const item of dataset) {

    test(item.id, async () => {

      const answer = await askDify(
        item.question
      );

      console.log('\nQUESTION:', item.question);
      console.log('\nANSWER:', answer);

      expectGroundTruthMatch(
        answer,
        item.expectedKeywords
      );

    });

  }

});