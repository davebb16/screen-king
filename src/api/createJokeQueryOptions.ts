import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

const JokeSchema = z.object({
  type: z.string(),
  id: z.number(),
  setup: z.string(),
  punchline: z.string(),
});

export type Joke = z.infer<typeof JokeSchema>;
export function createJokeQueryOptions() {
  return queryOptions({
    queryKey: ['joke'],
    queryFn: async () => fetch('https://official-joke-api.appspot.com/random_joke').then((res) => res.json()) .then((data) => JokeSchema.parse(data)),
  })
}