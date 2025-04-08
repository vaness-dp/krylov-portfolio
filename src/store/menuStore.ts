import { create } from 'zustand'

interface IMenuStore {
	isMenuOpen: boolean
	toggleMenu: () => void
	setMenu: (open: boolean) => void
}

export const useMenuStore = create<IMenuStore>(set => ({
	isMenuOpen: false,
	toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
	setMenu: (open: boolean) => set({ isMenuOpen: open })
}))
