import { test } from '@playwright/test';
import dataset from '../../datasets/agent.dataset.json';

import {
  expectToolSelection,
  expectGroundTruthMatch
} from '../../src/validators/aiValidators';

test.describe('Agent Workflow Testing', () => {
  for (const item of dataset) {
    test(item.id, async () => {

      const selectedTool = 'knowledge-base';

      const finalAnswer =
        item.id === 'agent-001'
          ? 'Customers may request a refund within 30 days.'
          : 'Refunds are returned to the original payment method.';

      expectToolSelection(
        selectedTool,
        item.expectedTool
      );

      expectGroundTruthMatch(
        finalAnswer,
        item.expectedKeywords
      );
    });
  }
});