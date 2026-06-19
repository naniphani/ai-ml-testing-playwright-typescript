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