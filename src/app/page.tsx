import { fetchLifeSpan, setMyAge } from './utils/helpers'
import Nav from './components/navigation/Nav' // should you be in App.tsx or in page.tsx
import App from '@/app/components/App'

export default async function Home() {
	const lifedata = await fetchLifeSpan()
	const lifespan = lifedata.data[0].values[0]
	const age = setMyAge()

	return (
		<main className=''>
			<Nav />
			<App age={age} lifespan={lifespan} />
		</main>
	)
}
