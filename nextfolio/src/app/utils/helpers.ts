// GLOBAL SCRIPTS

export const setMyAge = () => {
	const year = new Date()
	const currentYear = year.getFullYear()
	return currentYear - 1989
}
