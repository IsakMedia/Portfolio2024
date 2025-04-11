// GLOBAL SCRIPTS

export const setMyAge = () => {
	const year = new Date()
	const currentYear = year.getFullYear()
	return currentYear - 1989
}

const myQuery = [
	{
		code: 'Kon',
		selection: {
			filter: 'item',
			values: ['1'],
		},
	},
	{
		code: 'Alder',
		selection: {
			filter: 'item',
			values: ['0'],
		},
	},
	{
		code: 'ContentsCode',
		selection: {
			filter: 'item',
			values: ['BE0101A$'],
		},
	},
	{
		code: 'Tid',
		selection: {
			filter: 'item',
			values: ['2023'],
		},
	},
]

export const fetchLifeSpan = async () => {
	try {
		const response = await fetch(
			'https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101I/LivslangdEttariga',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: myQuery,
					response: {
						format: 'json',
					},
				}),
			}
		)
		if (!response.ok) {
			console.log('in the if')
			return response.json()
		}

		console.log('if it worked')
		return response.json()
	} catch (err) {
		console.error(err)
		return null
	}
}
