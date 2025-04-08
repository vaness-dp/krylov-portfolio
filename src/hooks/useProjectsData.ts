import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { IImageData, IProjectsData } from '@/components/projects/projects.data'

interface IProjectsDataResponse {
	projectsData: IProjectsData[]
	imageData: IImageData[]
}

export function useProjectsData() {
	return useQuery<IProjectsDataResponse>({
		queryKey: ['projectsData'],
		queryFn: async () => {
			const { data } = await axios.get<IProjectsDataResponse>('/api/projects')
			return data
		}
	})
}
