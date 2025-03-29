'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AnimatedOnScrollProps {
	children: React.ReactNode
	className?: string
	delay?: number // задержка в секундах
	duration?: number // длительность в секундах
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
	children,
	className,
	delay = 0,
	duration = 0.5
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const controls = useAnimation()

	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

	// Определяем, в видимости ли элемент (порог 10% высоты элемента)
	const isInView = useInView(ref, { amount: 0.5, once: false })

	// Эффект для отслеживания направления прокрутки
	useEffect(() => {
		let lastY = window.scrollY
		const onScroll = () => {
			const currentY = window.scrollY
			if (currentY > lastY) {
				setScrollDirection('down')
			} else if (currentY < lastY) {
				setScrollDirection('up')
			}
			lastY = currentY
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// Эффект для запуска анимаций при входе/выходе элемента
	useEffect(() => {
		if (isInView) {
			void controls.start({
				opacity: 1,
				y: 0,
				transition: { duration, delay }
			})
		} else {
			// Элемент вышел из окна – сдвигаем его обратно в сторону исходя из направления
			void controls.start({
				opacity: 0,
				y: scrollDirection === 'down' ? 50 : -50,
				transition: { duration: duration * 0.5 }
			})
		}
	}, [isInView, scrollDirection, controls, delay, duration])

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, y: scrollDirection === 'down' ? 50 : -50 }}
			animate={controls}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedOnScroll
