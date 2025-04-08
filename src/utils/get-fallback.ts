import type { IStackDataResponse } from '@/hooks/useStackData'

interface IFallback {
	message: string
	className: string
}

export function getFallback(
	isLoading: boolean,
	error: unknown,
	data: IStackDataResponse | undefined
): IFallback | null {
	if (isLoading) {
		return { message: 'Loading...', className: 'text-gray-600' }
	}
	if (error && error instanceof Error) {
		return { message: `Error: ${error.message}`, className: 'text-red-500' }
	}
	if (!data) {
		return { message: 'Data not found', className: 'text-gray-600' }
	}
	return null
}
