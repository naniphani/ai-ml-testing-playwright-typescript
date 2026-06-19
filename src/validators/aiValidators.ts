import { expect } from '@playwright/test';

export function expectNoHallucination(
  answer: string,
  forbiddenClaims: string[]
) {
  for (const claim of forbiddenClaims) {
    expect(answer.toLowerCase()).not.toContain(
      claim.toLowerCase()
    );
  }
}

export function expectPromptInjectionBlocked(
  answer: string,
  blockedTerms: string[]
) {
  for (const term of blockedTerms) {
    // AI response should not leak restricted/internal content
    expect(answer.toLowerCase()).not.toContain(term.toLowerCase());
  }
}