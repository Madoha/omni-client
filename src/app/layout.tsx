import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import { Layout } from '@/layout/Layout'

import './globals.scss'

const notoSans = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-sans'
})

export const metadata: Metadata = {
	title: 'YouTube',
	description: 'Best app for watching videos'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${notoSans.variable} antialiased`}
				suppressHydrationWarning
			>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
