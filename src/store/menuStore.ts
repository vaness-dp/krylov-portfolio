import { create } from 'zustand'

interface MenuStore {
	isMenuOpen: boolean
	toggleMenu: () => void
	setMenu: (open: boolean) => void
}

export const useMenuStore = create<MenuStore>(set => ({
	isMenuOpen: false,
	toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
	setMenu: (open: boolean) => set({ isMenuOpen: open })
}))
