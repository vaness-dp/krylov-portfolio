import type { Metadata } from 'next'
import { Anton, Montserrat } from 'next/font/google'
import React from 'react'

import { MobileMenu } from '@/components/menu-burger/MobileMenu'
import { Background } from '@/components/ui/Background'
import { Mail } from '@/components/ui/Mail'
import { Scrollbar } from '@/components/ui/Scrollbar'

import { Providers } from '@/providers/Providers'

import './globals.css'

export const metadata: Metadata = {
	title: 'Portfolio - Krylov Ivan',
	description: 'Personal portfolio of Krylov Ivan'
}

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
	preload: true
})

const anton = Anton({
	variable: '--font-anton',
	subsets: ['latin'],
	weight: ['400'],
	preload: true
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserrat.variable}>
				<Providers>
					<MobileMenu />
					{children}
					<Scrollbar />
					<Background />
					<Mail />
				</Providers>
			</body>
		</html>
	)
}
