'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { IImageData } from '@/types/types'

interface IProjectsImage {
	offsetY: number
	isVisible: boolean
	index: number
	imagesData: IImageData[]
}

export function ProjectsImage({
	offsetY,
	isVisible,
	index,
	imagesData
}: IProjectsImage) {
	const item = imagesData[index] || imagesData[0]

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={isVisible ? { opacity: 1, y: offsetY } : { opacity: 0, y: -50 }}
			transition={{ duration: 0.7, ease: 'easeInOut' }}
			className="pointer-events-none absolute top-0 right-0 z-[1] aspect-[3/4] w-[200px] overflow-hidden max-md:hidden xl:w-[350px]"
		>
			<Image
				src={item.src}
				alt={item.alt}
				width={400}
				height={500}
				decoding="async"
				// priority
				className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
			/>
		</motion.div>
	)
}
