'use client'

import { motion } from 'framer-motion'

export function ProjectsSvg() {
	const boxVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: { duration: 1, ease: 'easeInOut' }
		}
	}

	const arrowLineVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: { duration: 0.8, ease: 'easeInOut', delay: 1 }
		}
	}

	const arrowCurbVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: { duration: 0.6, ease: 'easeInOut', delay: 1.8 }
		}
	}

	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			initial="hidden"
			animate="visible"
		>
			<motion.path
				id="box"
				d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
				variants={boxVariants}
			/>
			<motion.path
				id="arrow-line"
				d="M10 14 21 3"
				variants={arrowLineVariants}
			/>
			<motion.path
				id="arrow-curb"
				d="M15 3h6v6"
				variants={arrowCurbVariants}
			/>
		</motion.svg>
	)
}
