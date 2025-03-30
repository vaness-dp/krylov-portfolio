'use client'

import { Variants, motion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

interface IAnimatedText extends PropsWithChildren {
	direction?: 'up' | 'down'
	delay?: number
	className?: string
}

export function AnimatedText({
	children,
	direction = 'up',
	delay = 0,
	className = ''
}: IAnimatedText) {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: direction === 'up' ? 50 : 0
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay,
				ease: 'easeOut'
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.6,
				ease: 'easeIn'
			}
		}
	}

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			exit="exit"
			variants={variants}
			viewport={{ once: false, amount: 0.3 }}
			className={className}
		>
			{children}
		</motion.div>
	)
}
