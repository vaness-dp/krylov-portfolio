'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function Loading() {
	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-[999]"
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<motion.div
					className="absolute inset-0 bg-indigo-700"
					initial={{ y: '100%' }}
					animate={{ y: ['100%', '0%', '-100%'] }}
					transition={{
						duration: 0.8,
						ease: 'easeInOut',
						delay: 0
					}}
				/>
			</motion.div>
		</AnimatePresence>
	)
}
