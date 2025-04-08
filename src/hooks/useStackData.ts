import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { IStackData } from '@/types/types'

export interface IStackDataResponse {
	frontendData: IStackData[]
	backendData: IStackData[]
	toolsData: IStackData[]
}

export function useStackData() {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

	return useQuery<IStackDataResponse>({
		queryKey: ['stackData'],
		queryFn: async () => {
			const { data } = await axios.get<IStackDataResponse>(
				`${basePath}/api/stack.json`
			)
			return data
		}
	})
}
