import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: 'Portfolio 2025',
	description: 'IsakMedia portfolio 2025',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
