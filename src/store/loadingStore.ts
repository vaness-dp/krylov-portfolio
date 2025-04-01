import { create } from 'zustand'

interface LoadingState {
	isLoading: boolean
	showLoader: () => void
	hideLoader: () => void
	setIsLoading: (loading: boolean) => void
}

export const useLoadingStore = create<LoadingState>(set => ({
	isLoading: true,
	showLoader: () => set({ isLoading: true }),
	hideLoader: () => set({ isLoading: false }),
	setIsLoading: loading => set({ isLoading: loading })
}))
