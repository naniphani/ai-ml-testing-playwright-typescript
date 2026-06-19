// src/clients/difyClient.ts
import 'dotenv/config';

export async function askDify(question: string): Promise<string> {
  const response = await fetch(`${process.env.DIFY_API_URL}/chat-messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.DIFY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: {},
      query: question,
      response_mode: 'blocking',
      user: 'playwright-ai-test-user',
    }),
  });

  if (!response.ok) {
    throw new Error(`Dify API failed: ${response.status}`);
  }

  const data = await response.json();

  // Dify returns answer text in "answer"
  return data.answer ?? '';
}