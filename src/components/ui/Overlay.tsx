'use client'

import cn from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

interface IOverlay {
	isOpen: boolean
	onClickAction: () => void
}

export function Overlay({ isOpen, onClickAction }: IOverlay) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isOpen ? 1 : 0 }}
			transition={{ duration: 0.15 }}
			onClick={onClickAction}
			className={cn(
				'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
				{
					'pointer-events-none invisible': !isOpen
				}
			)}
		/>
	)
}
