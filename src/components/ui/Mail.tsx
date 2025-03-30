import Link from 'next/link'

export function Mail() {
	return (
		<div className="fixed bottom-32 left-0 block max-xl:hidden">
			<Link
				href="mailto:vaness.engineer@gmail.com"
				className="text-muted-foreground hover:text-foreground !bg-bottom py-3 tracking-[1px] transition-all hover:!bg-center"
				style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
			>
				vaness.engineer@gmail.com
			</Link>
		</div>
	)
}
