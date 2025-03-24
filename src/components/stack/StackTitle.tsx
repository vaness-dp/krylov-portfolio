import { AnimatedText } from '@/components/ui/AnimatedText'

export function StackTitle({ title }: { title: string }) {
	return (
		<div className="sm:col-span-5">
			<AnimatedText
				as="p"
				direction="up"
				delay={0.1}
				className="text-muted-foreground font-secondary text-5xl leading-none uppercase"
			>
				{title}
			</AnimatedText>
		</div>
	)
}
