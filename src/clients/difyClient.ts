import 'dotenv/config';

export async function askDify(question: string): Promise<string> {
  const apiUrl = process.env.DIFY_API_URL;
  const apiKey = process.env.DIFY_API_KEY;

  if (!apiUrl || !apiKey) {
    throw new Error('Missing DIFY_API_URL or DIFY_API_KEY');
  }

  if (!apiUrl.startsWith('http')) {
    throw new Error('DIFY_API_URL must start with http or https');
  }

  const response = await fetch(`${apiUrl}/chat-messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
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
  return data.answer ?? '';
}