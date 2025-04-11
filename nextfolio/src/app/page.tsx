import { fetchLifeSpan, setMyAge } from './utils/helpers'
import App from '@/app/components/App'

export default async function Home() {
	const lifedata = await fetchLifeSpan()
	const lifespan = lifedata.data[0].values[0]
	const age = setMyAge()

	return (
		<main className=''>
			<App age={age} lifespan={lifespan} />
		</main>
	)
}
