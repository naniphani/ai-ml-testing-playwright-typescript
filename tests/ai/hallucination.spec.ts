import { test } from '@playwright/test';
import dataset from '../../datasets/hallucination.dataset.json';
import { expectNoHallucination } from '../../src/validators/aiValidators';

test.describe('Hallucination Testing', () => {

  for (const item of dataset) {

    test(item.id, async () => {

      // Mock AI response for now
      const aiResponse =
        'I do not know who won the 2099 FIFA World Cup.';

      expectNoHallucination(
        aiResponse,
        item.forbiddenClaims
      );

    });

  }

});