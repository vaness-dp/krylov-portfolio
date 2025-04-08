import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { IStackData } from '@/components/stack/stack-data'

export interface IStackDataResponse {
	frontendData: IStackData[]
	backendData: IStackData[]
	toolsData: IStackData[]
}

export function useStackData() {
	return useQuery<IStackDataResponse>({
		queryKey: ['stackData'],
		queryFn: async () => {
			const { data } = await axios.get<IStackDataResponse>('/api/stack')
			return data
		}
	})
}
