'use client'

import { Burger } from '@/components/menu-burger/Burger'
import { Menu } from '@/components/menu-burger/Menu'
import { Overlay } from '@/components/ui/Overlay'

import { useMenuStore } from '@/store/menuStore'

export function MobileMenu() {
	const { isMenuOpen, toggleMenu } = useMenuStore()

	return (
		<>
			<Burger
				isOpen={isMenuOpen}
				toggleMenu={toggleMenu}
			/>
			{isMenuOpen && (
				<Overlay
					isOpen={isMenuOpen}
					onClickAction={() => toggleMenu()}
				/>
			)}
			<Menu
				isOpen={isMenuOpen}
				onLinkClick={() => toggleMenu()}
			/>
		</>
	)
}
