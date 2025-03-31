'use client'

import type { PropsWithChildren } from 'react'

import { Footer } from '@/components/footer/Footer'
import { MobileMenu } from '@/components/menu-burger/MobileMenu'
import { Preloader } from '@/components/preloader/Preloader'
import { Background } from '@/components/ui/Background'
import { Mail } from '@/components/ui/Mail'
import { Scrollbar } from '@/components/ui/Scrollbar'

import { useLoadingStore } from '@/store/loadingStore'

export function Layout({ children }: PropsWithChildren) {
	const { isLoading } = useLoadingStore()

	return (
		<>
			<MobileMenu />
			<main>{children}</main>
			<Footer />
			{isLoading && <Preloader />}
			<Scrollbar />
			<Background />
			<Mail />
		</>
	)
}
