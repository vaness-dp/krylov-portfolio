'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function Scrollbar() {
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

	return (
		<div className="bg-background-light fixed top-[50svh] right-[2%] h-[100px] w-1.5 -translate-y-1/2 overflow-hidden rounded-full">
			<motion.div
				className="bg-primary h-full w-full rounded-full"
				style={{ y }}
			/>
		</div>
	)
}
