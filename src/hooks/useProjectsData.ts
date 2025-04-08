import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { IImageData, IProjectsData } from '@/types/types'

export interface IProjectsDataResponse {
	projectsData: IProjectsData[]
	imageData: IImageData[]
}

export function useProjectsData() {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

	return useQuery<IProjectsDataResponse>({
		queryKey: ['projectsData'],
		queryFn: async () => {
			const { data } = await axios.get<IProjectsDataResponse>(
				`${basePath}/api/projects.json`
			)
			return data
		}
	})
}
