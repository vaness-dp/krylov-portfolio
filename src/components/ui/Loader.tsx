'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Loader() {
	// animateOut отвечает за запуск exit-анимации
	const [animateOut, setAnimateOut] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimateOut(true)
		}, 900)
		return () => clearTimeout(timer)
	}, [])

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-[999]"
				initial={{ opacity: 1 }}
				animate={animateOut ? { opacity: 0 } : { opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<motion.div
					className="absolute inset-0 bg-indigo-700"
					initial={{ y: '100%' }}
					animate={{ y: ['100%', '0%', '-100%'] }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
				/>
			</motion.div>
		</AnimatePresence>
	)
}
