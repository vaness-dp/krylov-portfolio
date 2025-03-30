import { motion } from 'framer-motion'
import Link from 'next/link'

import { menuData, menuSocial } from '@/components/menu-burger/menu.data'

export function Menu({
	isOpen,
	onLinkClick
}: {
	isOpen: boolean
	onLinkClick: () => void
}) {
	return (
		<motion.div
			initial={{ x: '100%' }}
			animate={
				isOpen
					? { x: '0%', transform: 'translateX(0%)' }
					: { x: '100%', transform: 'translateX(100%)' }
			}
			exit={{ x: '100%' }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 right-0 z-[3] flex h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform flex-col gap-y-14 overflow-hidden py-10 lg:justify-center"
		>
			<motion.div
				initial={{ x: '50%' }}
				animate={isOpen ? { x: '0%' } : { x: '50%' }}
				exit={{ x: '50%' }}
				transition={{ delay: 0.15, duration: 0.5 }}
				className="bg-background-light fixed inset-0 z-[-1] scale-150 rounded-[50%]"
			/>
			<div className="mx-8 flex w-full max-w-[300px] grow sm:mx-auto md:items-center">
				<div className="flex w-full gap-10 max-lg:flex-col lg:justify-between">
					<div className="max-lg:order-2">
						<p className="text-muted-foreground mb-5 md:mb-8">SOCIAL</p>
						<ul className="space-y-3">
							{menuSocial.map((item, index) => (
								<li key={index}>
									<Link
										href={item.href}
										target="_blank"
										className="text-lg capitalize hover:underline"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="text-muted-foreground mb-5 md:mb-8">MENU</p>
						<ul className="space-y-3">
							{menuData.map((item, index) => (
								<li key={index}>
									<Link
										href={item.href}
										onClick={onLinkClick}
										className="text-lg capitalize hover:underline"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="mx-8 w-full max-w-[300px] sm:mx-auto">
				<p className="text-muted-foreground mb-4">GET IN TOUCH</p>
				<Link href="mailto:vaness.engineer@gmail.com">
					vaness.engineer@gmail.com
				</Link>
			</div>
		</motion.div>
	)
}
