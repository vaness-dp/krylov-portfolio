import { NextResponse } from 'next/server'

import { imageData, projectsData } from '@/components/projects/projects.data'

export async function GET(request: Request) {
	const data = {
		projectsData,
		imageData
	}
	return NextResponse.json(data)
}
