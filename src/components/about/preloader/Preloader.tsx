'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { letters } from '@/components/about/preloader/preloader.data'

export function Preloader() {
	const [isLoading, setIsLoading] = useState(true) // Состояние загрузки

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])
	return (
		<div className="fixed inset-0 z-[6] flex">
			{Array.from({ length: 10 }).map((_, index) => (
				<motion.div
					key={index}
					className="preloader-item h-full w-[10%] bg-black"
					initial={{ translateY: '0%' }}
					animate={isLoading ? { translateY: '0%' } : { translateY: '100%' }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				/>
			))}
			<p className="name-text font-secondary absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[20vw] leading-none lg:text-[200px]">
				{letters.map((letter, index) => (
					<motion.span
						key={index}
						className="inline-block"
						initial={{ translateY: '100%', opacity: 0 }} // Начальное состояние
						animate={
							isLoading
								? { translateY: '0%', opacity: 1 }
								: { translateY: '0%', opacity: 0 }
						}
						transition={{ duration: 0.3, delay: index * 0.1 }} // Задержка для каждого элемента
					>
						{letter}
					</motion.span>
				))}
			</p>
		</div>
	)
}
