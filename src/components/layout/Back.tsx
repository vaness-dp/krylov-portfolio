import { LucideArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function Back() {
	return (
		<Link
			href="/"
			className="group mb-16 inline-flex h-12 items-center gap-2"
		>
			<LucideArrowLeft
				width={24}
				height={24}
				className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-indigo-700"
			/>
			Back
		</Link>
	)
}
