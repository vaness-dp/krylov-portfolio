'use client'

import { LucideArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useLoadingStore } from '@/store/loadingStore'

export function Back() {
	const router = useRouter()
	const { showLoader, showPreloader } = useLoadingStore()

	const handleBack = () => {
		// showLoader()
		// setTimeout(() => {
		// 	router.push('/#selected-projects')
		// }, 900)
		showPreloader()
		router.push('/#selected-projects')
	}
	return (
		<button
			onClick={handleBack}
			className="group mb-16 inline-flex h-12 items-center gap-2"
		>
			<LucideArrowLeft
				width={24}
				height={24}
				className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-indigo-700"
			/>
			Back
		</button>
	)
}
