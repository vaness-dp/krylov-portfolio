'use client'

import { motion } from 'framer-motion'
import { JSX, useEffect, useState } from 'react'

interface Flake {
	id: number
	width: number
	height: number
	left: number
	duration: number
	delay: number
	opacity: number
	xDrift: number
}

export function Background(): JSX.Element {
	const [flakes, setFlakes] = useState<Flake[]>([])

	useEffect(() => {
		const generateFlakes = () => {
			const newFlakes: Flake[] = Array.from({ length: 30 }).map((_, index) => ({
				id: index,
				width: Math.random() * 2 + 2, // 2px - 4px
				height: Math.random() + 2, // 2px - 3px
				left: Math.random() * 100, // 0% - 100% по X
				duration: Math.random() * 20 + 15, // 12 - 22 сек для медленного падения
				delay: Math.random(), // небольшая задержка
				opacity: Math.random() * 0.4 + 0.6, // 0.6 - 1
				xDrift: Math.random() * 20 - 10 // отклонение X (-10px до 10px)
			}))
			setFlakes(newFlakes)
		}

		generateFlakes()
	}, [])

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			{flakes.map(flake => (
				<motion.div
					key={flake.id}
					className="absolute rounded-full bg-white"
					style={{
						width: `${flake.width}px`,
						height: `${flake.height}px`,
						left: `${flake.left}%`,
						opacity: flake.opacity
					}}
					initial={{ translateY: '-10vh', opacity: 0, x: 0 }}
					animate={{
						translateY: '110vh',
						opacity: [0, flake.opacity, flake.opacity, 0],
						x: [0, flake.xDrift, -flake.xDrift, 0]
					}}
					transition={{
						duration: flake.duration,
						delay: flake.delay,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
			))}
		</div>
	)
}
