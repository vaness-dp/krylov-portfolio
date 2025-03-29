import { Button } from '@/components/hero/content/Button'
import { Description } from '@/components/hero/content/Description'
import { Title } from '@/components/hero/content/Title'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'

export function Content() {
	return (
		<AnimatedOnScroll
			delay={0.3}
			className="max-w-[544px] flex-col items-start justify-center max-md:flex max-md:grow"
		>
			<Title />
			<Description />
			<Button />
		</AnimatedOnScroll>
	)
}
