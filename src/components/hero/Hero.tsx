import { Content } from '@/components/hero/content/Content'
import { Statistics } from '@/components/hero/statistics/Statistics'

export function Hero() {
	return (
		<section
			id="hero"
			className="relative overflow-hidden"
		>
			<div className="container flex h-[100svh] min-h-[530px] items-center justify-between max-md:flex-col max-md:pb-10">
				<Content />
				<Statistics />
			</div>
		</section>
	)
}
