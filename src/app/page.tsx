import { About } from '@/components/about/About'
import { Preloader } from '@/components/about/preloader/Preloader'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { Projects } from '@/components/projects/Projects'
import { Stack } from '@/components/stack/Stack'
import { Background } from '@/components/ui/Background'

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<About />
				<Stack />
				<Projects />
			</main>
			<Footer />
			<Preloader />
			<Background />
		</>
	)
}
