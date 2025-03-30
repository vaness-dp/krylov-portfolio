import { motion } from 'framer-motion'

interface IBurger {
	isOpen: boolean
	toggleMenu: () => void
}

export function Burger({ isOpen, toggleMenu }: IBurger) {
	return (
		<div className="sticky top-0 z-[4]">
			<button
				onClick={toggleMenu}
				className="absolute top-5 right-5 z-[2] size-12 md:right-10"
				aria-label="Toggle menu"
			>
				<motion.span
					className="bg-foreground absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 -translate-y-[5px] rounded-full duration-300 md:group-hover:rotate-12"
					initial={{ rotate: 0, y: 0 }}
					animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
					transition={{ duration: 0.1 }}
				/>
				<motion.span
					className="bg-foreground absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 translate-y-[5px] rounded-full duration-300 md:group-hover:-rotate-12"
					initial={{ rotate: 0, y: 0 }}
					animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
					transition={{ duration: 0.1 }}
				/>
			</button>
		</div>
	)
}
