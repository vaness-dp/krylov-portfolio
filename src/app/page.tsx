'use client'

import { About } from '@/components/about/About'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { Preloader } from '@/components/preloader/Preloader'
import { Projects } from '@/components/projects/Projects'
import { Stack } from '@/components/stack/Stack'
import { Background } from '@/components/ui/Background'
import { Burger } from '@/components/ui/Burger'

import { useLoadingStore } from '@/store/loadingStore'

export default function Home() {
	const { isLoading } = useLoadingStore()

	return (
		<>
			<Burger />
			<main>
				<Hero />
				<About />
				<Stack />
				<Projects />
			</main>
			<Footer />
			{isLoading && <Preloader />}
			<Background />
		</>
	)
}
