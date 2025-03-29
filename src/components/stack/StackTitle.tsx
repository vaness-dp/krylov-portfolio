import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'

export function StackTitle({ title }: { title: string }) {
	return (
		<div className="sm:col-span-5">
			<AnimatedOnScroll
				delay={0.2}
				className="text-muted-foreground font-secondary text-5xl leading-none uppercase"
			>
				{title}
			</AnimatedOnScroll>
		</div>
	)
}
