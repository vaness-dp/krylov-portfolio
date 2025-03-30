'use client'

import { useState } from 'react'

import { About } from '@/components/about/About'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { Burger } from '@/components/menu-burger/Burger'
import { Menu } from '@/components/menu-burger/Menu'
import { Preloader } from '@/components/preloader/Preloader'
import { Projects } from '@/components/projects/Projects'
import { Stack } from '@/components/stack/Stack'
import { Background } from '@/components/ui/Background'
import { Mail } from '@/components/ui/Mail'
import { Overlay } from '@/components/ui/Overlay'
import { Scrollbar } from '@/components/ui/Scrollbar'

import { useLoadingStore } from '@/store/loadingStore'

export default function Home() {
	const { isLoading } = useLoadingStore()

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(prev => !prev)

	return (
		<>
			<Burger
				isOpen={isMenuOpen}
				toggleMenu={toggleMenu}
			/>
			{isMenuOpen && (
				<Overlay
					isOpen={isMenuOpen}
					onClickAction={() => setIsMenuOpen(false)}
				/>
			)}
			<Menu
				isOpen={isMenuOpen}
				onLinkClick={() => setIsMenuOpen(false)}
			/>
			<main>
				<Hero />
				<About />
				<Stack />
				<Projects />
			</main>
			<Footer />
			{isLoading && <Preloader />}
			<Scrollbar />
			<Background />
			<Mail />
		</>
	)
}
