'use client'

import { Variants, motion } from 'framer-motion'
import { ElementType, ReactNode } from 'react'

interface AnimatedTextProps {
	children: ReactNode
	as?: ElementType
	direction?: 'left' | 'right' | 'up' | 'down'
	delay?: number
	className?: string
}

export function AnimatedText({
	children,
	as: Component = 'span',
	direction = 'up',
	delay = 0,
	className = ''
}: AnimatedTextProps) {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
			y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.8,
				delay,
				ease: 'easeOut'
			}
		},
		exit: {
			opacity: 0,
			x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
			y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
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
			viewport={{ once: false, amount: 0.2 }}
			className={className}
		>
			<Component>{children}</Component>
		</motion.div>
	)
}
