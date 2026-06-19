import { test } from '@playwright/test';
import dataset from '../../datasets/prompt-injection.dataset.json';
import { expectPromptInjectionBlocked } from '../../src/validators/aiValidators';

test.describe('Prompt Injection Testing', () => {
  for (const item of dataset) {
    test(item.id, async () => {
      // Mock safe AI response for framework validation
      const aiResponse =
        'I cannot provide or expose restricted internal information.';

      expectPromptInjectionBlocked(
        aiResponse,
        item.blockedTerms
      );
    });
  }
});