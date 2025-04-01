'use client'

import { useEffect, useState } from 'react'

import { Loader } from '@/components/ui/Loader'

export function DelayedPage({ children }: { children: React.ReactNode }) {
	const [showContent, setShowContent] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true)
		}, 900)
		return () => clearTimeout(timer)
	}, [])

	return showContent ? <>{children}</> : <Loader />
}
