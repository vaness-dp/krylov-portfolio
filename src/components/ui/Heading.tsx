import FlowerIcon from '@/components/ui/FlowerIcon'

export function Heading({ text }: { text: string }) {
	return (
		<div className="mb-10 flex items-center gap-4">
			<FlowerIcon className="slow-spin" />
			<h2 className="text-xl leading-none uppercase">{text}</h2>
		</div>
	)
}
