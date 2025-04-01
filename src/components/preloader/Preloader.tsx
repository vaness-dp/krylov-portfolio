'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { letters } from '@/components/preloader/preloader.data'

import { useLoadingStore } from '@/store/loadingStore'

export function Preloader() {
	const { hideLoader } = useLoadingStore()
	const [animateOut, setAnimateOut] = useState(false)

	useEffect(() => {
		const delayBeforeExit = 1400
		const exitDuration = 1400

		const exitTriggerTimer = setTimeout(() => {
			setAnimateOut(true)
		}, delayBeforeExit)

		const exitCompleteTimer = setTimeout(() => {
			hideLoader()
		}, delayBeforeExit + exitDuration)

		return () => {
			clearTimeout(exitTriggerTimer)
			clearTimeout(exitCompleteTimer)
		}
	}, [])

	return (
		<div
			className={`fixed inset-0 z-[6] flex ${animateOut ? 'pointer-events-none' : ''}`}
		>
			{Array.from({ length: 10 }).map((_, index) => (
				<motion.div
					key={index}
					className="h-full w-[10%] bg-black"
					initial={{ translateY: '0%' }}
					animate={!animateOut ? { translateY: '0%' } : { translateY: '100%' }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				/>
			))}
			<p className="font-secondary absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[20vw] leading-none lg:text-[200px]">
				{letters.map((letter, index) => (
					<motion.span
						key={index}
						className="inline-block"
						initial={{ translateY: '100%', opacity: 0 }}
						animate={
							!animateOut
								? { translateY: '0%', opacity: 1 }
								: { translateY: '0%', opacity: 0 }
						}
						transition={{ duration: 0.3, delay: index * 0.1 }}
					>
						{letter}
					</motion.span>
				))}
			</p>
		</div>
	)
}
