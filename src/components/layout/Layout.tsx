'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { useEffect } from 'react'

import { Footer } from '@/components/footer/Footer'
import { MobileMenu } from '@/components/menu-burger/MobileMenu'
import { Preloader } from '@/components/preloader/Preloader'
import { Background } from '@/components/ui/Background'
import { Loader } from '@/components/ui/Loader'
import { Mail } from '@/components/ui/Mail'
import { Scrollbar } from '@/components/ui/Scrollbar'

import { useLoadingStore } from '@/store/loadingStore'

export function Layout({ children }: PropsWithChildren) {
	const pathname = usePathname()
	const { isPreloading, isLoader, hidePreloader, hideLoader } =
		useLoadingStore()

	useEffect(() => {
		// Если на главной странице, оставляем preloader и скрываем loader
		if (pathname === '/') {
			hideLoader()
		} else {
			// На других страницах, скрываем preloader
			hidePreloader()
		}
	}, [pathname, hideLoader, hidePreloader])

	return (
		<>
			<AnimatePresence>
				{pathname === '/' && isPreloading && <Preloader />}
				{pathname !== '/' && isLoader && <Loader />}
			</AnimatePresence>
			<MobileMenu />
			<main>{children}</main>
			<Footer />
			<Scrollbar />
			<Background />
			<Mail />
		</>
	)
}
