import { create } from 'zustand'

interface LoadingState {
	isPreloading: boolean // для главной страницы
	isLoader: boolean // для переходов (например, при клике на Back)
	showPreloader: () => void
	hidePreloader: () => void
	showLoader: () => void
	hideLoader: () => void
}

export const useLoadingStore = create<LoadingState>(set => ({
	isPreloading: true,
	isLoader: false,
	showPreloader: () => set({ isPreloading: true }),
	hidePreloader: () => set({ isPreloading: false }),
	showLoader: () => set({ isLoader: true }),
	hideLoader: () => set({ isLoader: false })
}))
