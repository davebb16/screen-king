import { createFileRoute } from '@tanstack/react-router'
import { createJokeQueryOptions } from '../api/createJokeQueryOptions'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/jokes')({
  component: Jokes,
})

function Jokes() {
  const { data: joke } = useQuery(createJokeQueryOptions())

  if (!joke) return <div>Loading...</div>

  return (
    <div className='group'>
      <h1>Hahaha</h1>
      <p>{joke.setup}</p>
      <div>See joke:
      <input type='checkbox' /></div>
      <p className='group-has-[input:checked]:blur-none blur-sm transition-all duration-1000'>{joke.punchline}</p>
    </div>
  )
}