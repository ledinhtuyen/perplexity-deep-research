import { createPerplexity } from '@ai-sdk/perplexity';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages, apiKey } = await req.json();

  const result = streamText({
    model: createPerplexity({
      apiKey,
    })("sonar-deep-research"),
    messages,
  });

  return result.toTextStreamResponse();
}